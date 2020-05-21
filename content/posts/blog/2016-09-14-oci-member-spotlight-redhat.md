---
title: OCI Member Spotlight – Red Hat
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2016-09-14
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.  

**Name:** Chris Wright  
**Title:** VP & Chief Technologist  
**Company:** Red Hat, Inc  

**Why did you join OCI?**  
[Red Hat](https://www.redhat.com/) helped create the OCI to drive the long-term success of container technology, in part by supporting a healthy balance of innovation and stability for the technology and ecosystem. To succeed, the industry requires a consistent and stable way to define a container image and its runtime. Without that, we were seeing fragmentation in the low-level portion of the technology stack and, along with many others in the industry, identified this as a key threat. Creating a standard specification for the container image format and runtime brings the industry together and allows users to benefit from portable images with trustworthy provenance. Our customers need this level of portability and trust to fully adopt container technologies, especially in mission-critical roles, so a standard specification is paramount from that point of view.  Creating open industry standards around container formats and runtime also helps identify the lines around which we can innovate without breaking code that is already deployed.

OCI container technology starts with Linux, and one of the values Linux has brought to the industry is the aforementioned blend of innovation and stability (although containers are supported on other platforms such as Windows). Linux features like core system call APIs, process isolation, namespaces and resource management with cgroups, are the foundational building blocks for containers. The Linux philosophy of “never breaking userspace” is what enables containers to successfully decouple the container host from the container application, and it is this decoupling that makes containers so powerful.

**How is your organization involved in OCI?**  
Red Hat has been involved in OCI from the [very beginning](/posts/announcements/2015-06-20-industry-leaders-unite-to-create-project-for-open-container-standard) and remains deeply involved across multiple aspects of the community. We have provided support and input at every step, from pulling in more members to helping define the project’s governance structure to being directly involved in the creation of the image format and runtime specs and supporting code. Beyond serving on both the OCI Trademark Board and the Technical Oversight Board, Red Hat helps to maintain the Technical Developer Community and the runtime-spec and image-spec projects. We are also deeply involved with developing and maintaining supporting code projects, such as [runC](https://github.com/opencontainers/runc) and [ocitools](https://github.com/opencontainers/runtime-tools). Additionally, we participate in the Certification Working Group for these projects and are involved in a related project, the [Cloud Native Computing Foundation](https://www.cncf.io/), which addresses standardization at the orchestration level and will use OCI for the base image runtime and format specifications.

**What are the aspects of the runtime spec and/or image format spec that you are looking forward to most for your company?**  
We’re looking forward to a base image format and runtime so that we can provide a consistent and stable place to run containerized applications. We’re also interested in ensuring that our customers can digitally verify signed container content and pull containers from a federated collection of content repositories, whether they’re internal to their datacenters or externally from the web. This gives both trust and security as well as industry-wide scalability to the container ecosystem.

**How do you plan to use the runtime spec and/or image format spec?**  
Red Hat would like to be able provide a platform built on an OCI-compliant runtime to run OCI-compliant images. That lets us focus on customer problems beyond “plumbing,” and helps to ensure that customers have as much choice as possible. In the post v1.0 future of the specifications, we also want to provide tools for building and verifying those images as well as an image repository for OCI-compliant Red Hat content.

**How will these specifications help your business?**  
Since they rely on Linux, containers are central to Red Hat’s business, and our customers look to us for both expertise and solutions because of their use of [Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux). This is why we believe it is so important to provide the consistency and stability that comes with a well-defined format and runtime. Our customers want  to adopt container technology that is part of a unified standard, which will provide them with the ability to build and run portable containers.

**How do you anticipate OCI changing the container technology landscape?**  
Aside from helping accelerate adoption, I believe that the clear architectural lines we are creating in OCI will help foster innovation around the core technology. I’d like to see better componentization, so that we aren’t required to ship a single binary that does too many things, like building, transporting, running and orchestrating containers; each of these should be their own discrete technology piece. The industry wants to be sure that all of this base technology has a neutral steward like OCI, so keeping tools with a narrow focus and combining them is a proven way to build better sustainable technology stacks. This should allow for both stability and innovation.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers?  For small ISVs, application developers? For end users?**  
Being compatible with the OCI standard will mean that you know, as a content author, that your application is portable and that you can attest to having authored it. As a user, you can digitally trust the content and know that it will run on your preferred, compatible platform. Vertically integrated stacks risk locking-in users and fragmenting producers, and that stalls the entire ecosystem.

**What advice would you give to someone considering joining OCI?**  
Like any collaborative open source project, the most important thing to do is get directly involved. Your contributions are welcome, especially when it comes to bringing your experience as either a creator or consumer of container technologies. We want to get a diverse set of inputs so we can build the most robust technology stack. I’d also tell any newcomer to OCI that we want commitment to the project’s success from all involved. That means being consistently active as well as prepared to clearly communicate your ideas and listen to others’ input to help us collectively find the best path forward.
