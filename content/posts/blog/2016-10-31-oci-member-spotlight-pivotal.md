---
title: OCI Member Spotlight – Pivotal
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2016-10-31
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.  

**Name:** James Bayer  
**Title:** VP of Product  
**Company:** Pivotal  

**Why did you join Open Container Initiative (OCI)?**  
Pivotal’s work with containers is completely aligned with the purpose of the OCI, quoted as “creating open industry standards around container formats and runtime.” The roots of Pivotal’s work on containers started in 2011 with [Cloud Foundry](https://www.cloudfoundry.org/), an open source project that has enabled us to gain a lot of experience using containers on large-scale production deployments. Cloud Foundry started off as a single company project initially at VMware and then at Pivotal, before graduating to the Cloud Foundry Foundation, a large, foundation-organized community with open governance. Pivotal had a very positive experience with the Cloud Foundry Foundation, the community grew and we accomplished more together. Just as with Cloud Foundry Foundation, we believed that the timing was right for formalizing how a larger group could work together on containers through the OCI. We believe that participating in the OCI will advance container technology, grow the container ecosystem and help Pivotal accomplish our mission of transforming the way the world builds software.

**How is your organization involved in OCI?**  
Our first important milestone was to adopt OCI runC as Cloud Foundry’s core container runtime. This was a significant milestone that we recently achieved. I am excited that we have [completely transitioned to runC for Pivotal Web Services](https://blog.pivotal.io/pivotal-cloud-foundry/products/how-cloud-foundry-gives-developers-a-reliable-container-runtime) which is Pivotal’s hosted instance of Cloud Foundry. This is very meaningful because it demonstrates that runC has already achieved one of its main goals and become a shared foundational software component in two of the most popular projects using containers in Cloud Foundry and Docker.

**What are the aspects of the runtime spec and/or image format spec that you are looking forward to most for your company?**  
The stability of a published and versioned container image specification is very important. Users can be confident that whatever version of the specification they use to produce the image can be inspected and will know whether the target deployment platform will run and support that image. When new innovations and features are introduced, users can know which ones are supported where. This removes uncertainty and increases the likelihood of interoperability.

**How do you plan to use the runtime spec and/or image format spec?**  
Now that we have runC as the core container runtime in Cloud Foundry, we intend to participate in the image specification work. If you look at the OCI Scope Table there are many emerging areas where new work may develop in all aspects of the container lifecycle and there is lots of room for contributors to get involved.

**How will these specifications help your business?**  
Interoperability and portability is an immediate, obvious benefit for so many participants in the ecosystem. Developers and partners can have confidence that no matter what tools they use to produce standard images, they will have a very far reach for platforms where their software will run unchanged. This helps Pivotal’s Cloud Foundry customers and partners support more workloads on a common platform that works the same on-premises or in public clouds.

**How do you anticipate OCI changing the container technology landscape?**  
I believe we are going to continue to see more interoperability and workload portability, which is going to grow the options for all participants. This is going to unlock so much more innovation and experimentation than could have happened otherwise. While distribution is currently out of scope for OCI v1.0, for example, I’ve seen multiple examples of experiments to [improve image distribution using a torrent network](https://github.com/netvarun/docket). There are so many possibilities to innovate further.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers?  For small ISVs, application developers? For end users?**  
For all participants of the container ecosystem, the benefits are about being part of a large and growing ecosystem and community. The open governance ensures that anyone can participate and have transparency for the decisions, roadmap and ongoing work.

**What advice would you give to someone considering joining OCI?**  
Check out the OCI Scope Table, decide what projects are most meaningful to your organization, and start [participating](/community).
