---
title: OCI Runtime Spec v1.1
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2023-07-21
---

We are delighted to annouce the release of the [OCI Runtime Spec](https://github.com/opencontainers/runtime-spec) v1.1.0 today.
This release contains [about 80 pull requests](https://github.com/opencontainers/runtime-spec/milestone/17?closed=1) that were merged in the last three years.
We appreciate everybody who contributed to this release.

# What is the OCI Runtime Spec?

The OCI Runtime Spec defines the behavior and the configuration interface of low-level container runtimes such as [runc](https://github.com/opencontainers/runc).
The spec is also implemented by [crun](https://github.com/containers/crun), [youki](https://github.com/containers/youki), [gVisor](https://gvisor.dev/),
[Kata Containers](https://katacontainers.io/), and others.
These low-level container runtimes are usually called from high-level container runtimes such as [containerd](https://containerd.io/) and [CRI-O](https://cri-o.io/).

# "Breaking" Changes
## [config: change prestart hook spec to match reality (#1169)](https://github.com/opencontainers/runtime-spec/pull/1169)

In the OCI Runtime Spec v1.0, `prestart` hooks were required to be called during the `start` operation.
This was contrary to the actual implementation of runc, which calls `prestart` hooks as a part of the `create` operation.
The spec was partially revised to fix this several years ago [with the addition of new lifecycle hooks and the deprecation of the `prestart` hook](https://github.com/opencontainers/runtime-spec/pull/1008) but the text was confusing and didn't full explain the correct recommendations for implementations.

The spec has now been revised to completely resolve this issue and make the (deprecated) `prestart` hook have the same behaviour as the actual runc implementation.
Technically, this is a "breaking" change of the spec, but given that existing runtimes have already implemented this behaviour (even before the runtime-spec 1.0.0 release), and the specification already included text dealing with this issue we do not feel this warrants a major version bump.

# Deprecations
## [config-linux: mark memory.kernel[TCP] as NOT RECOMMENDED (#1093)](https://github.com/opencontainers/runtime-spec/pull/1093)

The `memory.kernel` and `memory.kernelTCP` resource configurations are now marked as deprecated, as the upstream Linux kernel [has deprecated the support for setting kernel memory limits since 5.4](https://github.com/torvalds/linux/commit/0158115f702b0ba208ab0).

Note that runc has ignored these configuration settings since [runc v1.0.0-rc94](https://github.com/opencontainers/runc/commit/2d38476c96e3407eba876e77b301880c6d7e5ccc).

# Additions
## [cgroup: add cgroup v2 support (#1040)](https://github.com/opencontainers/runtime-spec/pull/1040)

The spec now has the native support for cgroup v2.
Implementations no longer need to "emulate" v1 configuration on v2 hosts.

This has been already implemented in runc since [runc v1.0.0-rc93](https://github.com/opencontainers/runc/commit/6e5320ffa83af3ea92e464e82f9e3ba665ff7541).

## [seccomp: support RISC-V 64 (#1059)](https://github.com/opencontainers/runtime-spec/pull/1059)

The spec now supports the RISC-V (riscv64) architecture.

runc supports RISC-V since runc [v1.1.8](https://github.com/opencontainers/runc/commit/1cdfa95f39bc5e3ea46a498382b5376c983eed80).

## [seccomp: add Seccomp Notify support (#1074)](https://github.com/opencontainers/runtime-spec/pull/1074)

The spec now supports [`seccomp_unotify`](https://man7.org/linux/man-pages/man2/seccomp_unotify.2.html) (since Linux kernel v5.0) to allow hooking syscalls
from user-space.
For example, this is useful for [accelerating networking of rootless containers](https://github.com/rootless-containers/bypass4netns) by hooking syscalls
and replacing file descriptors from the host.

The support for `seccomp_unotify` has been already implemented in runc since [runc v1.1.0-rc.1](https://github.com/opencontainers/runc/commit/9a0419b92027040a6ea5f0b4653376f1766c3f04).

## [config: add IDMapping field for mount point (#1143)](https://github.com/opencontainers/runtime-spec/pull/1143)

The spec now supports ID-mapped mounts using [`MOUNT_ATTR_IDMAP`](https://man7.org/linux/man-pages/man2/mount_setattr.2.html) (since Linux kernel v5.12).
This eliminates the overhead of `chown` that was an obstacle to adopt user namespaces, though it should be noted that the `rootfs` cannot have idmapped mounts configured so higher-level runtimes will need to implement rootfs idmapping (which is fairly trivial).

This was recently implemented in the [`main`](https://github.com/opencontainers/runc/commit/f73b05dee6d017865d6d8929b0ec65d29ce4f3d2) branch of runc.
Will be included in runc v1.2.0.

## [features: add `features.md` to formalize the `runc features` JSON (#1130)](https://github.com/opencontainers/runtime-spec/pull/1130)

`runc features` (since [runc v1.1-rc.1](https://github.com/opencontainers/runc/commit/2b0ca195d64eaebdbb599071acff4c1efd0b3f1b))
is a command that prints the information about the compiled-in features such as the recognized mount options and the recognized seccomp architectures.

The information structure is now officially [part of the spec](https://github.com/opencontainers/runtime-spec/blob/main/features.md).

## [config-linux: add support for time namespace (#1151)](https://github.com/opencontainers/runtime-spec/pull/1151)

[Time namespaces](https://man7.org/linux/man-pages/man7/time_namespaces.7.html) (since Linux kernel v5.6) allows isolating
the `CLOCK_MONOTONIC` and the `CLOCK_BOOTTIME` clocks from the host and from other containers.
This is especially useful for checkpointing with [CRIU](https://criu.org/Time_namespace).

Note that the `CLOCK_REALTIME` clock (the best known Linux clock) is not isolated with time namespaces.

runc doesn't implement time namespaces yet, but there is a [pull request](https://github.com/opencontainers/runc/pull/3876) to implement it.

# Other changes

See [here](https://github.com/opencontainers/runtime-spec/pull/1213) for the list of the full changes.

# "OCI 1.1"

Coincidentally, OCI Image Spec v1.1 and OCI Distribution Spec v1.1 are planned to be
[released soon](../2023-07-07-summary-of-upcoming-changes-in-oci-image-and-distribution-specs-v-1-1/)
too.

However, it should be noted that the specs are usually not intended to be released in ensemble.
The next releases of the specs will be probably made separately.

# What's next?

See the [GitHub issues](https://github.com/opencontainers/runtime-spec/issues) and
the [pull requests](https://github.com/opencontainers/runtime-spec/pulls)
for the proposals toward the future releases.
e.g.,
- [Add Landlock LSM support (#1111)](https://github.com/opencontainers/runtime-spec/pull/1111)
- [Add loong64 support for seccomp (#1187)](https://github.com/opencontainers/runtime-spec/pull/1187)
- [Add hardware description object to the VM configuration (#1209)](https://github.com/opencontainers/runtime-spec/pull/1209)

You are always welcome to submit your own proposals too.
