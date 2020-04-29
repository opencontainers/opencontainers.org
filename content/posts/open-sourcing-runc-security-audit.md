---
title: Open Sourcing runc Security Audit
author:
  name: Amye Scavarda Perrin
  tag: ascavarda
date: 2020-01-31
---

Last last year, Cure53 performed a [security audit of runc](https://github.com/opencontainers/runc/blob/master/docs/Security-Audit.pdf). runc is a CLI tool for spawning and running containers according to the OCI specification. 

There were two different focuses for the security audit, the first being a general security audit, and the second dedicated to manual code auditing aimed at finding implementation-related issues that can lead to security bugs. 

First, the general security audit inspected the overall code quality from a meta-level perspective. Some of the indicators taken into account encompassed test coverage, security vulnerability disclosure process, approaches to threat modeling and general code hardening measures. 

In the future, OCI will be improving its security reporting practices, as the audit noted that the project could benefit from additional incentives for reporting security issues.

Second, Cure53 describes the key aspects of the manual code audit together with manual pentesting and, since only one major issue was spotted, attests to the thoroughness of the audit and confirms the high quality of the runc project. 

The whole audit is available [here](https://github.com/opencontainers/runc/blob/master/docs/Security-Audit.pdf).

## CVE-2019-19921

The race condition described in RUN-01-001 (CVE-2019-19921) is related to a more general problem with handling file paths textually, as well as assumptions made about procfs which were inaccurate and possible to work-around with some ingenuity. Aleksa Sarai (one of the maintainers of runc) has been working on solving this more general problem since June of last year, culminating in a [new library called “libpathrs”](https://github.com/openSUSE/libpathrs) which intends to solve this problem. The core idea is to use a file-descriptor based approach (combined with [openat2](https://lwn.net/Articles/796868/) — a new syscall developed by Aleksa to help solve this problem which will be available in Linux 5.6) in order to resolve the core exploitable race conditions present in path lookup. An overview of this problem and further outstanding problems was given by Aleksa as a talk at Linux.conf.au 2020, and is [available online](https://www.youtube.com/watch?v=tGseJW_uBB8).

Unfortunately, this work is still a work-in-progress and is not yet ready for use within runc, and thus a [temporary hotfix](https://github.com/opencontainers/runc/pull/2207) has been applied which disallows the core part of the procfs-based attack. It should be noted that this hotfix can be worked around by making the root of a container the volume of another container or by explicitly specifying the mountpoint of procfs inside a volume (thus, public clouds are recommended to review how much control untrusted users have over their mount configuration and should apply security policies as appropriate).