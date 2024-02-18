---
title: OCI Runtime Spec v1.2
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2024-02-19
---

We are delighted to annouce the release of the [OCI Runtime Spec](https://github.com/opencontainers/runtime-spec) v1.2.0.
This release contains [about 10 pull requests](https://github.com/opencontainers/runtime-spec/milestone/19?closed=1) that were merged since the 1.1.0 release.
We appreciate everybody who contributed to this release.

# What is the OCI Runtime Spec?

The OCI Runtime Spec defines the behavior and the configuration interface of low-level container runtimes such as [runc](https://github.com/opencontainers/runc).
The spec is also implemented by [crun](https://github.com/containers/crun), [youki](https://github.com/containers/youki), [gVisor](https://gvisor.dev/),
[Kata Containers](https://katacontainers.io/), and others.
These low-level container runtimes are usually called from high-level container runtimes such as [containerd](https://containerd.io/) and [CRI-O](https://cri-o.io/).

# Additions

## [config: add idmap and ridmap mount options (#1222)](https://github.com/opencontainers/runtime-spec/pull/1222)

Linux mount options have been expanded to include idmap and ridmap. These options are not passed directly to _mount(2)_ but require processing by runtimes.
The addition of such dummy options might impact existing runtimes; however, it has been confirmed by maintainers that there are no issues with at least crun and youki.
This enhancement was made to solve the issue that the IDMapping field introduced in [v1.1](https://opencontainers.org/posts/blog/2023-07-21-oci-runtime-spec-v1-1/#config-add-idmapping-field-for-mount-point-1143httpsgithubcomopencontainersruntime-specpull1143) could not apply `MOUNT_ATTR_IDMAP` and `AT_RECURSIVE` together, necessitating an expansion of the field.

## [config: add support for org.opencontainers.image annotations (#1197)](https://github.com/opencontainers/runtime-spec/pull/1197)

The org.containers.image has been added as a reserved annotation. Each field is linked with the OCI Image Spec, so please refer to the following for more details.  
https://github.com/opencontainers/image-spec/blob/v1.1.0-rc2/conversion.md#annotation-fields

## [features: add potentiallyUnsafeConfigAnnotations (#1205)](https://github.com/opencontainers/runtime-spec/pull/1205)

The `features` introduced in [v1.1.0]((https://opencontainers.org/posts/blog/2023-07-21-oci-runtime-spec-v1-1/#config-add-idmapping-field-for-mount-point-1143httpsgithubcomopencontainersruntime-specpull1143)) has been enhanced to show a list of `potentiallyUnsafeConfigAnnotations`, which could alter the behavior of runtimes.

# Other changes

See [here](https://github.com/opencontainers/runtime-spec/pull/1242) for the list of the full changes.

# What's next?

See the [GitHub issues](https://github.com/opencontainers/runtime-spec/issues) and
the [pull requests](https://github.com/opencontainers/runtime-spec/pulls)
for the proposals toward the future releases.
e.g.,
- [Add Landlock LSM support (#1111)](https://github.com/opencontainers/runtime-spec/pull/1111)
- [Add loong64 support for seccomp (#1187)](https://github.com/opencontainers/runtime-spec/pull/1187)
- [Add hardware description object to the VM configuration (#1209)](https://github.com/opencontainers/runtime-spec/pull/1209)

You are always welcome to submit your own proposals too.
