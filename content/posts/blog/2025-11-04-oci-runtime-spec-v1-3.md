---
title: OCI Runtime Spec v1.3
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2025-11-04
---

We are delighted to announce the release of the [OCI Runtime Spec](https://github.com/opencontainers/runtime-spec) v1.3.0.
This release contains [24 pull requests](https://github.com/opencontainers/runtime-spec/milestone/18?closed=1) that were merged since the 1.2.1 release.
We appreciate everybody who contributed to this release.

# What is the OCI Runtime Spec?

The OCI Runtime Spec defines the behavior and the configuration interface of low-level container runtimes such as [runc](https://github.com/opencontainers/runc).
The spec is also implemented by [crun](https://github.com/containers/crun), [youki](https://github.com/containers/youki), [gVisor](https://gvisor.dev/),
[Kata Containers](https://katacontainers.io/), and others.
These low-level container runtimes are usually called from high-level container runtimes such as [containerd](https://containerd.io/) and [CRI-O](https://cri-o.io/).

# Additions

## [config-vm: add hwConfig object (#1209)](https://github.com/opencontainers/runtime-spec/pull/1209)

The `vm.hwConfig` object is added to describe hardware configuration that should be passed to a VM-based container runtime.
e.g., number of vCPUs, amount of memory, and the device tree.

## [config-linux: add intelRdt.schemata field (#1230)](https://github.com/opencontainers/runtime-spec/pull/1230)

The `linux.intelRdt.schemata` field is added to address the complexity of separate schema fields and to resolve the issue of supporting currently uncovered
[Intel Resource Director Technology (RDT)](https://intel.github.io/cri-resource-manager/stable/docs/policy/rdt.html) features, such as
- L2 cache allocation
- Code and Data Prioritization (CDP).

## [config-linux: add netDevices object (#1271)](https://github.com/opencontainers/runtime-spec/pull/1271)

The `linux.netDevices` field is added to provide a declarative way to specify which host network devices should be moved into a container's network namespace.

## [config-linux: add memoryPolicy object (#1282)](https://github.com/opencontainers/runtime-spec/pull/1282)

The `linux.memoryPolicy` object is added to specify [NUMA policies](https://man7.org/linux/man-pages/man2/set_mempolicy.2.html).

## [config-freebsd: add the spec for FreeBSD (#1286)](https://github.com/opencontainers/runtime-spec/pull/1286)

The `freebsd` object is added to implement containers using [FreeBSD jails](https://docs.freebsd.org/en/books/handbook/jails/).

The following implementations are known:
- [runj](https://github.com/samuelkarp/runj)
- [ocijail](https://github.com/dfr/ocijail)

## [config-linux: add intelRdt.enableMonitoring field (#1287)](https://github.com/opencontainers/runtime-spec/pull/1287)

The `linux.intelRdt.enableMonitoring` field is added to enable [resctrl](https://docs.kernel.org/filesystems/resctrl.html) monitoring features.
This fields replaces the `enableCMT` and `enableMBM` fields, available in the spec versions v1.1.0 through v1.2.1.
Their semantics were loosely defined and there were no known implementations, so this change should not affect any existing implementations.

# Other changes

See [here](https://github.com/opencontainers/runtime-spec/pull/1302) for the list of the full changes.

# What's next?

See the [GitHub issues](https://github.com/opencontainers/runtime-spec/issues) and
the [pull requests](https://github.com/opencontainers/runtime-spec/pulls)
for the proposals toward the future releases.
e.g.,
- [Add Landlock LSM support (#1241)](https://github.com/opencontainers/runtime-spec/pull/1241)
- [Add vTPM specification (#1293)](https://github.com/opencontainers/runtime-spec/pull/1293)

You are always welcome to submit your own proposals too.
