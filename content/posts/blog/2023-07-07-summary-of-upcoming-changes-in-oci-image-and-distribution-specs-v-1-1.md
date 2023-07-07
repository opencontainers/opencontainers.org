---
title: Summary of Upcoming Changes in OCI Image and Distribution Specs v1.1
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2023-07-07
---

As mentioned in an [earlier post](./2023-01-26-oci-in-2023.md), the
OCI Reference Types Working Group delivered a suggested set of changes
in the OCI Image and Distribution specs to enable the creation and
discovery of relationships between objects stored in an OCI registry.

These changes (with some subsequent modifications) will be included in
upcoming minor releases of both OCI Image and Distribution spec.

# Notes on Versioning and the Term "OCI 1.1"

The version of the upcoming minor releases of both OCI Image and
Distribution spec happens to be the same: `v1.1.0`.

This has undoubtedly led to the term "OCI 1.1" which is a bit vague and
incorrect since these changes do not affect the Runtime spec. These versions
of the individual specifications are all technically independent of each other.

However, when dealing with clients responsible with pushing/pulling from
registries, or registries themselves, hearing claims of "support for OCI 1.1"
can be assumed to be relating to reference types and the changes
outlined in this post.

# List of Major Changes (3)

## 1. New Registry API Endpoint for Querying Relationships

The following HTTP API endpoint has been added to enable
querying for relationships between objects in the registry:
`GET /v2/<name>/referrers/<digest>`

The contents of a valid response to this request is a valid OCI
image index containing a list of descriptors which point to the
provided digest:

```json
{
  "schemaVersion": 2,
  "mediaType": "application/vnd.oci.image.index.v1+json",
  "manifests": [
    {
      "mediaType": "application/vnd.oci.image.manifest.v1+json",
      "size": 1234,
      "digest": "sha256:a1a1a1...",
      "artifactType": "application/vnd.example.sbom.v1",
      "annotations": {
        "org.opencontainers.artifact.created": "2022-01-01T14:42:55Z",
        "org.example.sbom.format": "json"
      }
    },
    {
      "mediaType": "application/vnd.oci.image.manifest.v1+json",
      "size": 1234,
      "digest": "sha256:a2a2a2...",
      "artifactType": "application/vnd.example.signature.v1",
      "annotations": {
        "org.opencontainers.artifact.created": "2022-01-01T07:21:33Z",
        "org.example.signature.fingerprint": "abcd"
      }
    }
  ]
}
```

If the response contains a `Link` header
(see [RFC5988](https://www.rfc-editor.org/rfc/rfc5988.html)),
this indicates that there is another page of results which the client
should fetch.

In addition, clients may provide a filter in querystring in the form
`?artifactType=<mediaType>`. Registries may or may not support this
server-side filtering mechanism. If supported, however, the registry is
required to respond with a header indicating the filter(s) applied:
`OCI-Filters-Applied: artifactType`. Note: the only filter defined at
this time is `artifactType`.

## 2. New Manifest Field for Establishing Relationships

A new field called `subject` can now be included on manifests
(including on an index) which points to another object in the registry:

```json
{
...
  "subject": {
    "mediaType": "application/vnd.oci.image.manifest.v1+json",
    "digest": "sha256:5b0bca...",
    "size": 7682
  },
...
}
```

This is the primary mechanism for linking objects to one another. This
is what is used to determine the proper list returned by the API endpoint
described in #1 above.

If the registry supports the processing of the `subject` field, it is required
to respond with a header in the following form: `OCI-Subject: sha256:5b0bca...`
(the value being the `digest` field in the `subject` JSON object).

## 3. Official Guidance on How to Specify Alternatative Artifacts

For several years, people have been coming up with different ways to
specify alternative (non-image) artifacts in the registry.

One such method relied on using a custom value for the `config.mediaType`
field on the image manifest. This is the same method used by tools such
as Helm, OPA, WASM etc.

In the new OCI releases, this behavior has been finally codified as
a valid way of specifying this information.

If you look again at #1 above, in the sample JSON response you will notice the
new field `artifactType` on descriptors. The value of this field is either a.) the
`artifactType` provided on the manifest when it is pushed or b.) the value of `config.mediaType` if the `artifactType` field is missing.

TLDR; for new clients pushing artifacts, there is a new top-level field called
`artifactType` which can be used to denote a custom, non-image artifact. If
an object is instead pushed with a custom artifact type in the `config.mediaType`
field (the old way), this value will be surfaced in the `artifactType` field
in the API response.

# Closing Thoughts

This post attemts to cover all of the major changes involved in adopting
OCI Image and Distribution specs v1.1, however there are several other
fine-grained details which can only be understood by carefully reading
through the specifications.

We encourage you to take a look at both of the latest specs to see for yourself:

- [Image spec](https://github.com/opencontainers/image-spec/blob/main/spec.md)
- [Distribution spec](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)

As always, if you need assistance, please reach out to the OCI
community via GitHub, Slack, or the mailing list. You can find more
info on how to get in touch with the OCI community
[here](../../community/overview/).
