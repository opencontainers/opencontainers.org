---
title: OCI Member Spotlight – Rancher Labs
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2017-01-31
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.  

**Name:** Darren Shepherd  
**Title:** Chief Architect  
**Company:** Rancher Labs  

**Why did you join OCI?**  
The OCI is a great opportunity for the community to collectively build a common container runtime standard. That opportunity was missed with virtual machines several years ago – there was never a standard for VMs that pragmatically worked. It’s refreshing to be able to approach things differently with containers.

At Rancher Labs, everything we build is open source – there’s no closed or proprietary versions of our product. For us, it’s not just a matter of easing adoption, but a belief that the best technology comes from transparency and collaboration. Being a part of OCI, and working with our peers to guide standards development, is an important component of that.

**What are the aspects of the runtime spec and/or image format spec that you are looking forward to most for your company?**  
We’re looking forward to having well-defined specifications being widely adopted. This allows both users and vendors to focus on innovation instead of shifting format expectations.

**How do you plan to use the runtime spec and/or image format spec?**  
We already use the draft specifications in everything built by Rancher. We use Docker as a fundamental packaging and runtime engine, which conforms to OCI draft [runtime spec](https://github.com/opencontainers/runtime-spec) (via runc) and draft [image format](https://github.com/opencontainers/image-spec) spec.

**How will these specifications help your business?**  
Our users rely on [Rancher container management platform](https://rancher.com/) to integrate with a wide variety of container technologies. Obviously, this is much easier to do when we have a common set of standards. But, more importantly, specifications give users confidence that the solutions they invest time and effort into will work for the long haul, without precluding adoption of new innovations. In short, having specifications lets us build the best product we can so our users can do the same.  

**How do you anticipate OCI changing the container technology landscape?**  
The promise of containers lies in them being truly portable. OCI enables that by ensuring various technologies can stick to a common standard. Going forward, image and runtime specifications will be a powerful platform on which container-based applications can be built.  

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers?  For small ISVs, application developers? For end users?**  
The OCI standards are key to building a large ecosystem that everyone – ISVs, developers, hosting providers, etc. – can plug into. With a common runtime and image spec, hosting providers can tap into the widest possible user base. ISVs can package and test their apps once and be assured they will run everywhere. In addition, developers have access the widest selection of tools, while end users benefit from higher quality and more robust applications.

As a community, we should be enabling the entire spectrum of container users to focus on building the best of breed solution for their own particular set of technologies, without having to worry about the full, end-to-end solution.

Consider joining the [OCI community](/join) if you’re interested in contributing to container standards.
