---
title: Calling All Registries to Submit OCI Conformance!
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2021-11-30
---

Last year, [we announced](/posts/blog/2021-05-05-oci-dist-spec-v1/)
that the OCI Distribution Specification reached a 1.0.
Included in this release was a new tool for testing registries'
conformance against the spec, which you can find
[here](https://github.com/opencontainers/distribution-spec/tree/main/conformance).

Now, we are asking that registries which conform to the spec submit proof
to the [oci-conformance](https://github.com/opencontainers/oci-conformance) repo.

## Inspired by Kubernetes

The OCI conformance model is entirely based upon the process defined by
[cncf/k8s-conformance](https://github.com/cncf/k8s-conformance), which has had
phenomenal success in scaling their conformance program across dozens of
Kubernetes distributions for each new minor release.

## The OCI-Conformant Products Webpage

Upon submitting your registry's conformance results, it will appear on the new
[conformance.opencontainers.org](https://conformance.opencontainers.org),
which is dynamically generated based on the repo:

![OCI-Conformant Products webpage screenshot](/img/blog/2021-11-30-oci-conformance/oci-conformant-products-webpage-screenshot.png)

## Submitting Results

The official instructions for submitting conformance results can be found
[here](https://github.com/opencontainers/oci-conformance/blob/main/instructions.md).

You can also view submissions made by
other registries by searching
[PRs containing the text "Conformance results for distribution-spec/v1.0"](https://github.com/opencontainers/oci-conformance/pulls?q=is%3Apr+Conformance+results+for+distribution-spec%2Fv1.0+)
and use them as points of reference.

If you need any help, or have questions about this process, you are
encouraged to get in touch with the [OCI Community](/community/overview/).
