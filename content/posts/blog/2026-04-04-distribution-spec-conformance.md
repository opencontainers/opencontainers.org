---
title: OCI Distribution Spec Conformance Redesign
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2026-04-06
---

The OCI Distribution Spec conformance suite has received a significant rewrite.
As a result of this rewrite, registry authors and operators will likely see new issues reported that were not detected in previous versions of the conformance suite.
However, efforts have been made to make the transition backwards compatible so that any automated jobs running these tests do not themselves break.

## Why Redesign the Old Tests?

The original conformance tests were starting to experience growing pains.
They were designed to run a single set of data through four groups of tests:

1. Push
1. Pull
1. Content Discovery
1. Content Management

The push tests would upload manifests and blobs using various put and post requests.
The pull tests would retrieve that content with various head and get requests.
The discovery tests would list tags and referrers.
And the management tests would delete the content.

All of these tests would run as a `go test` generated binary, and were built on top of some 3rd party abstractions to simplify the writing of those tests.

However, as OCI has grown, particularly to support artifacts and new APIs, a few issues became apparent:

1. Writing tests and running them with `go test` resulted in a non-idiomatic workflow for both the maintainers and the users of those tests.
1. As more types of data were being tested, the conformance suite was not efficiently scaling, and instead required lots of copy-and-paste code that would get out of sync as bugs were fixed.
1. The API tests were not granular, making it difficult to handle specific APIs being disabled on a registry.
1. Any API failure would only report the first error, rather than listing all of the issues.
1. There was no ability to select what kinds of data to test on the registry.
1. Specifying the version of the specification to test leveraged the git tag, which restricted the ability to test old versions of the spec with new data types and prevented any bug fixes from being released without a revision of the specification.
1. The results only identified the four major API groups as a pass/fail, and granular details required reviewing the logs.

## How Are the New Tests Designed?

The redesigned conformance suite performs the following steps at a high level:

1. Process Configuration
1. Generate Data
1. Run Blob Tests
1. Run Image Tests
1. Run Invalid Input Tests
1. Output Results

The configuration now includes the following:

- Registry connection details (hostname, TLS settings, login credentials, and repository names)
- OCI distribution-spec release to test (this no longer depends on the git tag)
- APIs to test (with more granularity)
- Kinds of data to test

The data generation step creates various manifests and blobs for the different kinds of data permitted in the configuration.
This includes lots of edge cases, including artifacts, different digest algorithms, empty lists, various fields in the JSON, and a nested index (containing another index).
These various edge cases are added as OCI encounters implementations that break in unexpected ways.
Data from newer versions of the image-spec will be tested against older versions of the distribution-spec by default, since these specs are independently versioned and data portability between registries is an important goal of OCI.

An independent set of blob tests is performed since there are multiple ways to push blobs to an OCI registry.
The suite of blob tests is performed per digest algorithm being tested, making it easier to extend the conformance suite for new algorithms.
This also includes tests for different error handling scenarios when pushing blobs, like pushing chunks out of order, or mounting blobs that do not exist.
A variety of blob range requests are also tested, which is becoming more popular with lazy loading of layers and chunked pulling of very large blobs.

After verifying the various blob APIs, tests are run using the data that was generated above.
Each test begins by pushing the various blobs and manifests, then queries are run to ensure the data was correctly uploaded and can be pulled, followed by deletion requests run in reverse.
Many of these API tests may be enabled or disabled, with a default set of APIs enabled according to the OCI distribution-spec version in the configuration.
The same test procedure is performed for each of the generated data sets, allowing code reuse as new types of data are added to the conformance suite, more thorough test coverage, and a consistent cleanup at the end of the test (assuming the deletion APIs are enabled).

The results now include a `results.yaml` file.
In addition to a redacted version of the configuration used to run the test, this file reports the status of the API and data tests with several possible values:

- `Pass`: All conformance tests were successful.
- `Skip`: At least one test was run but the registry indicated the feature was not supported.
- `Disabled`: The test was not enabled in the configuration.
- `FAIL`: At least one test was run and the registry returned an invalid response.

The difference between `Skip` and `FAIL` is whether the response was valid according to the specification.
For example, with several blob upload APIs, the registry may return a `202 Accepted` instead of a `201 Created` to indicate the blob upload was not supported with the first API, but with a location where the client can now complete that upload.
Projects may find it helpful to disable unsupported APIs to avoid failing data test results, or to disable an unsupported data type to avoid failing API results.

## Running the Conformance Suite

To run the tests, you first need to input your configuration.
The conformance tests accept configuration using either environment variables or a yaml configuration.
An example yaml configuration (saved to `oci-conformance.yaml`) could look like:

```yaml
version: "1.1"
registry: localhost:5000
tls: disabled
repo1: conformance/repo1
repo2: conformance/repo2
username: "test"
password: "secret123"
apis:
  blobs:
    delete: false
data:
  nondistributable: false
  customFields: false
  sha512: false
```

This would run the tests with the default configuration for the distribution-spec 1.1 release with blob deletion and a few types of data disabled.
The full yaml configuration and associated environment variables are listed in the [conformance README][conformance-readme].

Running the conformance tests can be performed with Go, Docker, or GitHub Actions.
For each of these options, see the [conformance README][conformance-readme] for the exact steps.

## Publishing Results

Conformance results are voluntarily submitted to [conformance.opencontainers.org][conformance-web].
Those submissions may include disabled and failed results to help users identify portability and compatibility issues they may encounter.
To submit your own registries results, see the [opencontainers/oci-conformance repo][conformance-repo], specifically the [submission instructions][conformance-upload-instructions] for the list of steps to submit a pull request.

[conformance-readme]: https://github.com/opencontainers/distribution-spec/blob/main/conformance/README.md
[conformance-web]: https://conformance.opencontainers.org/
[conformance-repo]: https://github.com/opencontainers/oci-conformance
[conformance-upload-instructions]: https://github.com/opencontainers/oci-conformance/blob/main/instructions.md
