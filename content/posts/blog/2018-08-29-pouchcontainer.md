---
title: PouchContainer – How OCI Specifications Power Alibaba
author:
  name: Allen Sun
  tag: asun
tags: blog
date: 2018-08-29
---

By Allen Sun, Alibaba Group

[PouchContainer](https://github.com/alibaba/pouch) is an open source container project created by Alibaba Group to be enterprise ready and promote OCI container standards. The project is a fundamental piece of software in Alibaba’s infrastructure, it helps process transactions smoothly on millions of containers.

To become a general container engine for every scenario in production, PouchContainer seeks ways to support several OCI-compatible container runtimes. This action makes container service totally out of box:

* [runc](https://github.com/opencontainers/runc): container runtime based on Linux cgroups and namespaces;
* [katacontainers](https://github.com/kata-containers/runtime): container runtime based on hypervisor; and
* [runlxc](https://linuxcontainers.org/lxc/getting-started/): container runtime based on LXC especially on legacy kernels.

## Architecture Based on OCI and Open Source Components

![Pouccontainer arhictecutre diagram](/img/blog/2018-08-29-pouchcontainer/pouchcontainer-arch.png)

_Three OCI-compatible runtimes are listed in the middle right part of architecture._

## Features

PouchContainer’s most important features are:

- Rich container: Besides the common ways of running container, PouchContainer includes a rich container mode, which integrates more services, hooks, and many others container internals to guarantee containers running like usual.
- Strong isolation: PouchContainer is designed to be secure by default. It includes lots of security features, like hypervisor-based container technology, lxcfs, directory disk quota, patched Linux kernel and so on.
- P2P distribution: PouchContainer utilizes [Dragonfly](https://github.com/dragonflyoss/Dragonfly), a P2P-based distribution system, to achieve lightning-fast container image distribution.
- Kernel compatibility: Enables OCI-compatible runtimes to work on old kernel versions, like linux kernel 2.6.32+.
- Standard compatibility: PouchContainer keeps embracing container ecosystem to support industry specifications such as CNI, CSI and so on.
Kubernetes Native: PouchContainer has natively implemented [Kubernetes Container Runtime Interface (CRI)](https://kubernetes.io/blog/2016/12/container-runtime-interface-cri-in-kubernetes/).

## Learn more about PouchContainer

PouchContainer brings many additional features to end-users. Want to learn more? Please visit the PouchContainer GitHub, where the [PouchContainer](https://github.com/alibaba/pouch) community is currently busy preparing the 1.0.0 GA release.
