---
title: OCI Member Spotlight – Apcera
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2016-12-15
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around the container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.  

**Name:** Henry Stapp  
**Title:** Director, Product Management  
**Company:** Apcera  

**Why did you join OCI?**  
The rapidly evolving container ecosystem has created a variety of disparate image and runtime types. The goal behind the Open Container Initiative that motivated Apcera to join was the desire to create a common standard. Maintaining compatibility across different image types and runtimes is a large burden for vendors today, while contributing to and supporting a common standard helps build better products in the long run.

At Apcera, we care deeply about standards. For example, we have open-sourced one of the first independent implementations of the App Container (appc) specification, called [Kurma](http://www.kurma.io/). In particular, Kurma implements the appc specification while leveraging [runc](https://github.com/opencontainers/runc) and the runtime specification  from the Open Container Initiative (OCI).

**How is your organization involved in OCI?**  
We focus on the interoperability aspects of the specification and what it brings to today’s enterprises. When you look at the magnitude of connectivity, communications, access rights, and identity that’s coming in container management platforms along with what is next with IoT, Apcera, as a member of OCI, can get in front of this emerging technology in a collaborative, ecosystem-oriented way.

**What are the aspects of the runtime spec and/or image format spec that you are looking forward to most for your company?**  
We are mainly interested in improving image portability between different runtimes, so the [image specification definition](https://github.com/opencontainers/image-spec) is where we focus most. We want to make it as easy as possible for our customers to move to a container management platform like Apcera by having better support for their current container workloads. When customers want to try Apcera, we do not want any barriers. By supporting a widely used runtime spec and image format, users will have the utmost confidence that their workloads will be supported.

**How do you plan to use the runtime spec and/or image format spec?**  
Today our open source container runtime, called [Kurma](http://www.kurma.io/), implements the App Container (appc) specification and leverages runc from the Open Container Initiative (OCI). We want Kurma to be standards-based, and intend to have Kurma implement OCI specifications as they get finalized in v1.0 and gradually build them into the core of Kurma. As OCI gains parity with appc and gains adoption, it would naturally make sense to have Kurma’s core focused on OCI as well.

**How will these specifications help your business?**  
We believe de facto standards and technologies that have been adopted early on will need to be included and will need to work well together moving forward. Standard specifications benefit customers and furthers the ecosystem.

For instance, if the different container management platforms adopt the new OCI image format, then it could be possible to have workloads created by different technologies deployed through Kubernetes, Apcera, or others running in an OCI-compliant runtime and image format. This ecosystem needs both specialization and standardization of interfaces at the same time in order to form comprehensive solutions.

**How do you anticipate OCI changing the container technology landscape?**  
Today, container technologies are fragmented (e.g., there are several container models for Linux, Windows, Solaris, IBM mainframes and so on) and many competing systems have emerged. As OCI standards mature, enterprises can invest in container technology without fear of running into compatibility problems.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers?  For small ISVs, application developers? For end users?**  
For small ISVs, technology based on OCI specifications provide a foundational standard. Organizations can start with container and image specs and grow as needed by layering compatible technology such as networking, storage, and orchestration. Individual application developers and small software startups could install tooling from container images. If they need mysql, rather than struggling with OS-dependent packaging, they could just launch a mysql container image.

The benefits may vary for hosting providers. Big companies have bigger budgets, but vary in container adoption levels. OCI-based technologies can give organizations that are less experienced in the space a launching point into containers, possibly with guidance from the hosting provider. However, more experienced customers may already be used to specific container technology for their specific needs that drift from the “standard.” By having a broader base of users leveraging OCI as a foundation, hosting providers will have an easier job supporting more clients.  

**What advice would you give to someone considering joining OCI?**  
The image specification for containers is a viable OCI community effort that we all contribute to and can benefit from. And this is just the beginning! Open source initiatives and ecosystem collaboration are driving innovation across cloud native architectures to create a unified and shared body of best practices. If you want a front row seat, [you should consider joining](/community).
