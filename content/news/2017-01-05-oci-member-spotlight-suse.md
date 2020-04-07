---
title: OCI Member Spotlight – SUSE
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2017-01-05
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.  

**Name:** Michal Svec  
**Title:** Senior Product Manager, Virtualization and Containers  
**Company:** SUSE  

**Why did you join OCI?**  
SUSE is a pioneer in open source software, with a very long history of contributing to open source projects and initiatives. In particular, SUSE has been involved with container technologies since the early days (2010). OCI’s efforts to build a vendor-neutral, portable and open specification and runtime format that delivers on the promise of containers as a source of application portability aligns directly with SUSE’s efforts to build sustainable enterprise solutions.

**How is your organization involved in OCI?**  
As an organization committed to the development of open standards –and our long history of open source software ecosystem contributions–SUSE has been a contributor to OCI since the project formed.  Some of our main contributions to OCI include:

- We’re one of the maintainers of the reference OCI container runtime specification implementation [runC](https://github.com/opencontainers/runc), a core OCI project.
- We’ve recently started a project called [umoci](https://github.com/cyphar/umoci), which is the first OCI-native image manipulation and management tool. This tool is being developed with the goal of being contributed back into the OCI so the community can fully utilize the power of this tooling.
- We have also contributed exploratory work, such as [rootless containers](https://github.com/opencontainers/runc/pull/774), to runC, which is an interesting new area in the container field. Rootless containers allow the creation of containers without the need for privileges (something that is useful with, say, academic computing clusters and similar shared environments where administrators are hesitant to install software that runs as root). While this kind of work may not have any immediate business applications, it benefits the wider container community and will help inspire further innovation.

**What are the aspects of the the runtime spec and/or image format spec that you are looking forward to most for your company?**  
The stability and interoperability of the runtime and image format specifications are by far the most exciting aspects of the OCI specifications. This allows for community creation of a diverse range of tooling, which will ultimately provide a much richer platform that SUSE (and others) can support and maintain. In addition, it means that we can confidently provide and contribute to such tooling, knowing that it will remain aligned with the needs of the broader community.

**How do you plan to use the runtime spec and/or image format spec?**  
At SUSE, we plan to integrate support for OCI into our [Open Build Service](https://openbuildservice.org/) and K[IWI Application builder](https://opensource.suse.com/kiwi/) offerings, to provide support for dependency tracking and all of the other benefits provided by our build service story. This will be facilitated by an open source project we have developed called [umoci](https://github.com/cyphar/umoci) (referenced above), that we hope will become a standard for how people interact with OCI images. In addition, we contribute to other projects, such as [skopeo](https://github.com/containers/skopeo), that may become a part of this OCI image-building lifecycle.

Apart from the benefits offered to SUSE’s business, this will be a very significant contribution to the openSUSE community as well as the community of other distributions which use OBS (such as Fedora, Arch Linux, Debian) and the container community as a whole. SUSE believes in an “open” open source philosophy; it is very important that we contribute to openSUSE and other open communities.

In addition, we also contribute to [CRI-O](https://github.com/cri-o/cri-o), which will allow Kubernetes to create and manage containers using nothing but OCI tooling and specifications to run distributed clusters of containers. With the recent announcement of SUSE’s [Container as a Service Platform](https://www.suse.com/communities/blog/suse-container-service-platform-casp-new-product-plans-announced-susecon-2016/), we hope that CRI-O will eventually become a part of that product.

**How will these specifications help your business?**  
Containers are revolutionizing both the development and distribution of applications, which is set to grow by leaps and bounds. Standardization helps avoid fragmentation that can happen during explosive growth of new technology. Our customers can benefit from the standards- based open source technology that allows more choices and reduces the risk of being locked into a specific implementation, which in turn helps preserve their investments in standards-based container technologies.

**How do you anticipate OCI changing the container technology landscape?**  
Even though we haven’t hit the v1.0 release yet, the OCI has already changed the container technology landscape quite significantly, as it has enabled standardization of many projects that support the OCI specifications. Such projects include [runV](https://github.com/hyperhq/runv), the [Clear Containers OCI runtime](https://github.com/intel/cc-oci-runtime), [grootfs](https://github.com/cloudfoundry/grootfs), [Mesos](https://issues.apache.org/jira/browse/MESOS-5011), and several others. In addition, OCI’s goal of interoperability will also lead to future projects for a variety of environments and workloads.

Thanks to OCI, new innovative technologies such as [rootless containers](https://www.cyphar.com/blog/post/20160627-rootless-containers-with-runc) have been possible. At SUSE, we’ll continue to contribute our technical expertise to help shape the future of container technologies.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers?  For small ISVs, application developers? For end users?**  
Having an open standard for containerization allows end users to avoid being locked into proprietary stacks, while it also allows ISVs and hosting providers to benefit from a rich community of tooling that is interoperable with their stack. An application developer can have the confidence that their application will run on their preferred platform, without the concern of portability to other platforms. Overall, it’s a net benefit for everyone involved.

**What advice would you give to someone considering joining OCI?**  
The best way to get involved in the OCI is to start [contributing](/community) to the various projects, as with any open source project. If you have experience or a new perspective on the intricacies of container images and runtimes, then your contributions will benefit the community. The ongoing success of the OCI is dependent on a diverse base of contributors coming to agreement on what features and requirements need to be standardised across various platforms. Contributors are always welcome!
