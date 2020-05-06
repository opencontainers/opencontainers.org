---
title: Open Container Initiative (OCI) Releases v1.0 of Container Standards
subhead: Open, portable, vendor-neutral container specifications now available  
author:
  name: Open Container Initiative
  tag: oci
tags: announcement
date: 2017-07-19
---

**SAN FRANCISCO, Calif. – 19 July, 2017** ​– The [Open Container Initiative](https://www.opencontainers.org/) (OCI), an open source community for creating open industry standards around containers, today announced the debut release of its container runtime and image format specifications, comprised of [Runtime Specification v1.0](https://github.com/opencontainers/runtime-spec/blob/master/RELEASES.md) (a specification for defining the lifecycle of a container) and [Image Format Specification v1.0](https://github.com/opencontainers/image-spec) (a specification for the container image format). Combined with efforts to create a formal certification program later this year, OCI is bringing a set of common, minimal, open standards and specifications around container technology to a reality.

OCI v1.0 specifications lay the foundation for container portability across different implementations to make it easier for customers to support portable container solutions. The OCI will launch a certification program shortly such that different implementations can demonstrate conformance to the specifications.

“The v1.0 release of the OCI specifications is a huge milestone for both the container community and the industry at large,” said Chris Aniszczyk, Executive Director, OCI. “By creating these open, accessible specifications, along with early deployments, we are bringing the industry closer to portability and standardization. This is no small feat, and I am incredibly proud of the OCI community for all the hard work that went into this release.”

The initial release comes following an integrated and collaborative effort among a diverse community made up of individual contributors and disparate organizations, including  the project’s over 40 member organizations. Formed in June of 2015, the OCI was [launched](/news/2015-07-22-community-rallies-behind-open-container-initiative) with the express purpose of developing vendor neutral container standards that provide the industry the ability to fully commit to container technologies today without the fear of lock-in. OCI began with a specification describing container runtime behavior and expanded a year later to include a container image specification. Since then, the community has also worked on projects including [runtime-tools and image-tools](https://github.com/opencontainers/tob/blob/master/proposals/tools.md), [go-digest](https://github.com/opencontainers/go-digest), and [selinux](https://github.com/opencontainers/selinux).

While v1.0 represents a great deal of progress, marking a readiness for serious commercial adoption, there is still work to be done. The OCI community will be launching a formal certification program later this year while active and ongoing work is underway in terms of additional platform support and potential to add additional specification functionality or projects.  

More information about the Runtime Specification v1.0 is available at https://github.com/opencontainers/runtime-spec/ and details on the Image Format v1.0 Specification can be found here: https://github.com/opencontainers/image-spec

To learn about becoming involved with the OCI, [visit here](/community) for details on the developer community, [here](/join) to join as a member or participate in the upcoming certification program.

**Thanks to the OCI Community**  
The release would not be possible without the hard work and dedication of the numerous maintainers of the runtime and image format specs: Vincent Batts, Jonathan Boulle, Jason Bouzane, Brendan Burns, Michael Crosby, Daniel Dao Quang Minh, Stephen Day, Tianon Gravi, Qiang Huang, Rohit Jnagal, Vishu Kannan, Mrunal Patel, Brandon Philips, and John Starks. We are also extremely grateful to the additional maintainers across the OCI: Chris Aniszczyk, Liang Chenye, Rob Dolin, Zhou Hao, Lei Jitang, Xie Keyang, Victor Marmol, Aleksa Sarai, Ma Shimiao, Andrey Vagin, and Stephen Walli. We would also like to thank our 250+ contributors across the wider OCI community.

**Comments from Contributing Members**

**Anchore**  
“The establishment of an open standard is an essential step toward an unprecedented level of automation and portability that containers deliver to enterprise users,” said Daniel Nurmi, CTO of Anchore, Inc. “With the release of the OCI 1.0 specification, Anchore can deliver even more focused and stable security, certification and validation systems optimized for containers, giving our customers the confidence, transparency and choice that only open standards and tools can provide.”

**Dell Technologies**  
“The promise of many significant technologies has been cut short by competing standards” said Barton George, Senior Architect, Office of the CTO, Dell Technologies. “Being keenly interested in advancing technologies for our customers, Dell Technologies is encouraged by the common and open standards that the OCI’s v1.0 specifications allow. This specification ensures that containers continue as a key enabler of the Cloud-native applications that allow businesses to react to, and deliver on, customers’ needs in the era of digital transformation.”

**Docker**  
“From the initial commit to runc to building the Open Container Initiative (OCI) with a broad coalition of container industry leaders in 2015, Docker has been steadfastly committed to driving a basic standard that can serve as a building block for the broader industry,” said Patrick Chanezon, Chief Developer Advocate for Docker. “Today marks an important milestone for the OCI with the release of OCI v1.0 specifications, a standard that is implemented by the components within the Docker platform – runc and containerd. The OCI is a basic format that when combined with other key components such as LinuxKit, Notary or InfraKit, enables Docker to build a secure, reliable and easy-to-use container platform that serves our user requirements across Linux, Windows or mainframe, on prem or across multiple clouds.”

**Cloud Foundry Foundation**  
“Cloud Foundry believes that an industry standard for container images is critical to the interoperability of cloud-native application platforms. As a very early adopter of the runC library from OCI, we are extremely excited about the launch of OCI v1.0,” said Chip Childers, CTO, Cloud Foundry Foundation. “Cloud Foundry officially adopted runC as the primary container runtime library for Linux-based nodes in October of 2016 and we’re actively planning the adoption of the OCI Image Specification within the Cloud Foundry platform.”

**CoreOS**  
“CoreOS started the conversation years ago on the container image and runtime specification, and today we are thrilled to have worked alongside the major leaders across the industry to create a stable OCI 1.0,” said Brandon Philips, Chair of the OCI Technical Oversight Board and CTO of CoreOS. “With the OCI Runtime Spec, and more importantly, the OCI Image Format Spec, at 1.0 and now mature for broad use, users can expect the OCI to help stabilize a growing market of interoperable, pluggable tools, and should gain confidence that containers are here to stay. And we are actively working with the Kubernetes community to bring this v1.0 OCI release to a future release.”

**Fujitsu**  
“It’s great that the OCI specification 1.0 release is now available,” said Katsue Tanaka, Senior Vice President and Head of Platform Software Business Unit, Fujitsu Limited. “A widely adopted solid specification is important for evolving container solutions and creating an ecosystem. Container technologies help us decouple applications and platforms; applications based on the standard container spec achieve portability across clouds and on-premises. The OCI spec will drive our cloud business towards a more digital business platform through sustainable standardized application deployment technologies.”

**Google**  
“Google is appreciative of all the work that goes into open source and open specifications. The OCI v1.0 standards represent countless hours of cross industry collaboration which further enable containers as the unit of portable application workloads.” said Sarah Novotny, Lead Open Platforms Program Manager, Google. “We’re working to implement OCI v1.0 with the Kubernetes community as well as in Google Container Registry, Container Builder, and Container Engine. Our goal is to provide end-to-end OCI support from build to registry to runtime in GCP benefiting our users and ecosystem.”

**Huawei**  
“As a leading contributor to OCI, Huawei is pleased to see the release of OCI v1.0 image format and runtime specifications, which we’ll implement into our FusionStage container solution,” said Xiaoli Jiang, General Manager of Huawei OpenStack & Container Open Source Ecosystem. “This set of common, open, and neutral container specs will help the entire container ecosystem, including aiding enterprises in focusing even further on container technologies that bring added value.”

**IBM**  
“From the development of LXC with the Linux community in 2008, to now the establishment of the OCI v1.0 specification in 2017, the evolution of container technology has marched forward and reached a significant milestone” said Todd Moore, VP Open Technology, Digital Business Group, IBM. “We believe the OCI v1.0 runtime and image format specifications represent the next advancement along the path towards interoperable open cloud technologies, and we are actively planning the use of OCI conforming containers as part of our IBM Bluemix Container Service.”

**Intel**  
“At Intel, we believe in open source development and open standards, and for nearly two decades the Intel® Open Source Technology Center has advanced projects across markets and at every point of the solution stack to help ensure everything running open source runs best on Intel® Architecture,” said Imad Sousou,Vice President and General Manager of the Open Source Technology Center at ‎Intel Corporation. “We are excited to see OCI releasing 1.0, to have collaborated with the industry on this specification, and to have Intel® Clear Containers (https://github.com/01org/cc-oci-runtime) support this.”

**Mesosphere**  
“At Mesosphere we’re committed to open source projects like OCI and we’re particularly excited to work with the developer and enterprise community to embrace the v1.0 specification,” said Benjamin Hindman, Founder of Mesosphere and Co-Creator of Apache Mesos. “We plan on fully supporting OCI in DC/OS, an open source project we founded over a year ago to bring the power of Mesos to the broader community. We’ve had more than 100,000 clusters launched with DC/OS and we’re excited about bringing OCI to those users. We’re especially excited to see how OCI and the Container Storage Interface (CSI), a project we helped spearhead to provide a standard for container orchestration solutions, will work together. We truly believe the power of open source projects like OCI, CSI, and CNI will pave the way for the next generation of computing innovation.”

**Microsoft**  
“Open standards like OCI are very important to Microsoft as they help ensure portability and interoperability of containers across platforms and operating systems,” said Taylor Brown, Principal Lead Program Manager for Windows containers. “The OCI specification has provided a much-needed containers standard, for which operating systems like Windows and Linux can standardize platform support. Containers are now ubiquitous allowing developers across all platforms to depend on them for powering their current and future applications.”

**Oracle**  
“Standards are vital for enterprise adoption and support. The 1.0 release of the OCI image and runtime specs is a milestone that marks the transition of containers from early adopters to mainstream businesses,” said Vish Abrams, Cloud Development Architect. “Oracle is proud to have participated in the creation of these specs and to have open sourced some of the first software to support them. We look forward to continuing to contribute to container standards in the future through the OCI and our open source projects.”

**Pivotal**  
“Interoperability and portability are essential elements to the Pivotal ecosystem,” said James Bayer, Vice President of Product, Cloud Foundry at Pivotal. “With the new OCI specification, developers and partners will have confidence that their software will run unchanged. This helps Pivotal Cloud Foundry customers and partners support more workloads on a common platform that works the same on-premises and in public clouds.”

**Rancher Labs**  
“Finalization of the 1.0 container standards is a great milestone for the technology and for our users.  The vast variations in implementation have complicated container usage,” said Darren Shepherd, Co-Founder and Chief Architect, Rancher Labs. “These container standards are the cornerstone of industry-wide efforts to ensure that containers remain portable and able to serve as a ubiquitous component of distributed applications, and we are pleased to have been able to play a role in their development.”

**Red Hat**  
“The potential of Linux containers is significant for the enterprise world, from increased application portability to simply delivering better code faster, but the risk of technology fragmentation at the format level is a scary prospect for organizations that are looking to base their next decade-plus of innovation on containerized applications,” said Chris Wright, Chief Technologist, Office of Technology, Red Hat. “Just as Red Hat helped standardize Linux, making it a reliable foundation for mission-critical operations, the Open Container Initiative, with the launch of the OCI 1.0 runtime and image format specs, is aiming to do the same for Linux containers within the enterprise. Red Hat is pleased to be an active, vocal, supportive member of this effort to help enterprises more fully and confidently embrace the promise of Linux containers.”

**SUSE**  
“SUSE believes standards are extremely important to establishing consistency across different environments, and we look forward to contributing to the full runtime and image format potential of OCI 1.0,” said Michal Svec, Senior Product Manager, Virtualization and Containers, SUSE. “Containers are key to the future of cloud computing, and SUSE is deeply involved with open container and image standards, using them to address developer and enterprise customer needs.”

**Univa**  
“Standards allow our enterprise customers to protect their investments in technology and help to ensure interoperability,” said Rob Lalonde, VP and General Manager of Navops by Univa. “Having a standardized container format and run-time specification will help the ecosystem to move much more quickly in building tools and solutions in the layers above. Conversely, the lack of a specification would slow down developers who then have to support multiple formats and runtimes simultaneously, and would greatly slow end-user adoption. We welcome OCI 1.0!”

**VMware**  
“Enterprise organizations investing in cloud-native initiatives expect their applications to simply work on-premises or in the cloud,” said Paul Fazzone, Vice President and General Manager, Cloud-Native Apps Business Unit, VMware. “Today’s initial release of OCI specifications will provide enterprises with peace of mind that they can leverage the promises of interoperability and workload portability. VMware is committed to work with the community to help establish common, open standards and specifications for containers, and will support them across future releases of VMware infrastructure software.”

**About the Open Container Initiative (OCI)**  
The Open Container Initiative is an open governance structure for the express purpose of creating open industry standards around container formats and runtime. Projects associated to the Open Container Initiative can be found at https://github.com/opencontainers. Learn more about joining the OCI community here: https://www.opencontainers.org/community

The Open Container Initiative is a Collaborative Project at The Linux Foundation. Linux Foundation Collaborative Projects are independently funded software projects that harness the power of collaborative development to fuel innovation across industries and ecosystems. www.linuxfoundation.org

**About The Linux Foundation**
The Linux Foundation is the organization of choice for the world’s top developers and companies to build ecosystems that accelerate open technology development and commercial adoption. Together with the worldwide open source community, it is solving the hardest technology problems by creating the largest shared technology investment in history. Founded in 2000, The Linux Foundation today provides tools, training and events to scale any open source project, which together deliver an economic impact not achievable by any one company. More information can be found at  www.linuxfoundation.org.

\#\#\#

**Additional Resources**  
[Join as a Member](/join)
[Join the OCI Developer Community](/community)
[OCI Blog](/news)
[FAQ](/faq)

**Media Inquiries**  
Jill Lovato
The Linux Foundation
[jlovato@linuxfoundation.org](mailto:jlovato@linuxfoundation.org)
