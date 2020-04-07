---
title: OCI Member Spotlight – Wercker
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2017-03-01
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.  

**Name:** Micha Hernandez van Leuffen  
**Title:**  CEO  
**Company:** Wercker  

**Why did you join OCI?**  
We believe that the promise of containers (portability, interoperability, and agility) can only actually be achieved by the establishment of certain standards. We have joined the OCI community to help frame and promote a set of (in this case, specific) standards around the image format and container runtime.

**How is your organization involved in OCI?**  
For us, it makes sense to support the OCI in whatever capacity we can to help in the mission of standardizing core container technology. As a [CI/CD tool](https://www.wercker.com) it is important to our platform to provide customers with a clear set of standards and guidance.

**What are the aspects of the the runtime spec and/or image format spec that you are looking forward to most for your company?**  
With a container [image specification](https://github.com/opencontainers/image-spec) that anyone is free to contribute to and implement, containers will start to run without modification in a variety of engines (Docker, EC2, Kubernetes). This greater flexibility will allow us (and our clients) to grow and change based on evolving market needs.

**How do you plan to use the runtime spec and/or image format spec?**  
As an automation platform that helps developers build and deploy their applications to the different scheduler and orchestration frameworks out there (like Kubernetes or Mesos), we mostly benefit from [Application Bundle Builders](https://blog.wercker.com/deploying-a-microservice-to-gke-with-gcr) that would enable us to package up source code and configuration into an app bundle, ready for launch. Right now we’re using Docker as the container runtime and format (which is adopting OCI standards via [containerd](https://www.docker.com/blog/introducing-containerd/)), but as mentioned above, more value can be built on top of an open standard, as it’s capable of being executed inside of any runtime environment.

**How will these specifications help your business?**  
The continuing adoption of containers and the ability to run them across a variety of vendor implementations and platforms due to an open standard container specification will make it easier for businesses like ours to add value and innovation on top of existing infrastructure  without the massive overhead of multiple container implementations.

**How do you anticipate OCI changing the container technology landscape?**  
A body whose primary goal is to help create and maintain a container specification that is independent of orchestration stack, portable across a wide variety of operating systems, and is not tightly associated with any particular commercial vendor will help mold the landscape to the benefit of all rather than few major stakeholders, in turn encouraging innovation. This can only be a good thing.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers? For small ISVs, application developers? For end users?**  
Hosting providers benefit because they no longer have to worry about supporting a variety of container specifications– and thus constant modification updates to a variety of runtimes–making them more flexible and more efficient. Small ISVs benefit because having one standard way to package applications makes for easy distribution. Application developers will have the advantage of ‘package once and run anywhere,’ and users can expect more innovation across automation platforms and build tools.

**What advice would you give to someone considering joining OCI?**  
[Get involved](/community) and participate to be heard. The initiative is built, and can only move forward with contributions, not just membership. 
