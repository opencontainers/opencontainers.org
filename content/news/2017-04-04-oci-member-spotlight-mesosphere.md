---
title: OCI Member Spotlight – Mesosphere
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2017-04-04
---
The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around the container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.

**Name:** Jie Yu  
**Title:** Technical Lead  
**Company:** Mesosphere  

**Why did you join OCI?**  
Mesosphere commits and contributes to many different open source projects, including [Apache Mesos](https://mesos.apache.org/), [Marathon](https://github.com/mesosphere/marathon), and [DC/OS](https://dcos.io/), because we believe in open source software. We want to give our users the option to use an open and portable container image standard that will give them more transparency and control, in addition to their existing solution.

**How is your organization involved in OCI?**  
Mesosphere participates in the [image spec](https://github.com/opencontainers/image-spec) project, and we started adding support for the OCI image spec in Mesos. You can follow that effort in the Mesos community [here](https://issues.apache.org/jira/browse/MESOS-5011).

**What are the aspects of the the OCI specs that you are looking forward to most for your company?**  
Transportation and discovery mechanisms are still missing from the OCI image spec, so we are inventing our own open source image discovery and transportation mechanism in the meantime. We are excited for image discovery and transportation to be standardized, so that we don’t have to invent our own way, which will give users a more consistent experience.

**How do you plan to use the OCI specs?**  
The image format spec will be supported in Mesos and DC/OS soon. We don’t directly expose runtime spec configurations to our users; it is abstracted away from the Mesos and DC/OS APIs via an external [containerizer](http://mesos.apache.org/documentation/latest/containerizer/). (Kubernetes does something similar with the [Container Runtime Interface](https://github.com/cri-o/cri-o) (CRI).

**How will these specifications help your business?**  
Mesos, Marathon, and DC/OS help users build data-dependent apps on any infrastructure, and Mesosphere ultimately wants to give all its users more choices about how to build their applications. Letting users choose the type of containers they use is one big draw of the projects we contribute to (we already support Docker and Mesos containers), and we’re excited to be able to give our users a consistent experience, and more open source options.

**How do you anticipate OCI changing the container technology landscape?**  
We predict that most vendors will adopt the OCI standard, and that developers will build OCI images using different compliant tools, pushing them to different registries. Container orchestrators will pull those images from a registry and run them. A lot of tooling will spring up around OCI to make this process smooth.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers? For small ISVs, application developers? For end users?**  
We think that the benefit for everyone will be stability and portability. People who adopt OCI will be able to monitor and help shape the development of that standard, which helps ensure that any changes benefit the ecosystem at large. Since OCI is vendor-neutral, no matter what happens in the long run to individual companies, we believe it will persist.

**What advice would you give to someone considering joining OCI?**  
Everyone involved in the project is very responsive. Join the [community](/community); don’t be shy!
