---
title: OCI Member Spotlight – OpenStack (Kata Containers)
author:
  name: Kristen Evans
  tag: kevans
tags: blog
date: 2018-05-01
---

The OCI community is comprised of a diverse set of member organizations that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.

**Name:** Xu Wang  
**Title:** CTO + Kata Architecture Committee member  
**Company:** Hyper.sh + Kata Containers  

**What is Kata Containers?**

[Kata Containers](https://katacontainers.io/) is an open source project hosted by the OpenStack Foundation that provides lightweight virtual machines that feel and perform like containers, while providing the workload isolation and security advantages of traditional VMs.

**Why did OpenStack (Kata Containers) join OCI?**

The Kata Containers project runs containers specified by OCI runtime spec in virtual machines. We joined OCI to guarantee the compatibility between Kata Containers and OCI runtime specs, and to help to improve the OCI specifications – enabling more efficient Kata Containers. We look forward to collaborating around tooling, compatibility and interoperability testing.

**How can OCI community members contribute to Kata Containers?** 

Many of the Kata community members come from the OCI community, so we look forward to more collaboration on use case sharing, specification discussion, testing and toolchains. See Github for more information: https://github.com/kata-containers/community

**How do you anticipate OCI changing the container technology landscape?** 

The OCI specs guarantee that container technology can be open, vendor neutral and a cornerstone of future computing infrastructure.

**What is the benefit of open standards like OCI for users of Kata Containers?**

The open and unified container spec gives users more options and helps Kata to be adopted in more cases.

More and more applications are shipped and run under OCI specs. With OCI, Kata could enable users to launch unified container applications no matter if the runtime isolation technology is namespace or VM.

For cloud providers, if a user application has been developed for OCI specs, they could run the application with Kata Containers directly which introduces fewer layers than running a container orchestration system on a VM pool.

On the other hand, for those users who have already invested in VM technology, they could apply their existing tools to Kata Containers and move their application to microservice with OCI containers.
