---
title: "FAQ"
toc: true
---

## What is the mission of the OCI?

The mission of the Open Container Initiative (OCI) is to promote a set of common, minimal, open standards and specifications around container technology.

## What are the governing principles of the OCI?

- Technology leadership
- Influence through contribution
- Limited scope, limited politics
- Minimalist structure
- Representative leadership
- Adherence to anti-trust regulations

## How broad is the mission of the OCI?

The mission of the OCI is intentionally limited in scope; in particular please take a look at the OCI Scope Table in the charter for more information. We are not trying to define a large stack, become a big marketing organization or throw large conferences. We are focused on the container image format and runtime, areas where stability and standardization are more important, so that we can allow innovation to happen around us. To use an analogy, we are agreeing on the width of the train tracks, so we can all go off individually and try to build the fastest engines.

## The specific duties of the OCI include:

- Creating a formal specification for container image formats and runtime, which will allow a compliant container to be portable across all major, compliant operating systems and platforms without artificial technical barriers.
Accepting, maintaining and advancing the projects associated with these standards (“Projects”). It will look to agree on a standard set of container actions (e.g., start, exec, pause) as well as runtime environment associated with container runtime.
- Harmonizing the above-referenced standard with other proposed standards, including the appc specification.

## Why have all of these companies come together?

In the past few years, there has been rapid growth in both interest in and usage of container-based solutions. Almost all major IT vendors and cloud providers have announced container-based solutions, and there has been a proliferation of start-ups founded in this area as well. While the proliferation of ideas in this space is welcome, the promise of containers as a source of application portability requires the establishment of certain standards around format and runtime. While the rapid growth of the Docker project has served to make the Docker image format a de facto standard for many purposes, there is widespread interest in a single, open container specification, which is:

- not bound to higher level constructs such as a particular client or orchestration stack,
- not tightly associated with any particular commercial vendor or project, and
portable across a wide variety of operating systems, hardware, CPU architectures, public clouds, etc.

## How does this benefit users?

Users can fully commit to container technologies today without worrying that their current choice of any particular infrastructure, cloud provider, devops tool, etc. will lock them into any technology vendor for the long run. Instead, their choices can be guided by choosing the best tools to build the best applications they can. Equally important, they will benefit by having the industry focus on innovating and competing at the levels that truly make a difference. To use an analogy, why argue about the width of train tracks, when you can worry about laying track and building the best possible engines? Ultimately, we want to make sure that the original promise of containerization—portability, interoperability, and agility—aren’t lost as we move to a world of applications built from multiple containers run using a diverse set of tools across a diverse set of infrastructures.

## What is the connection between this and the appc effort?

The individuals behind the appc effort have joined the technical leadership of the OCI, and our intention is to work towards both a common format that is compatible with existing container formats as well as to work on a future spec that combines the best elements of all the existing container efforts.

## What are the drivers for this container specification?

- A container not bound to higher level constructs such as a particular client or orchestration stack, and
- A container not tightly associated with any particular commercial vendor or project, and
- A container portable across a wide variety of operating systems, hardware, CPU architectures, public clouds, etc.

## What are the values guiding the OCI projects and specifications?

- Composable. All tools for downloading, installing, and running containers should be well integrated, but independent and composable. Container formats and runtime should not be bound to clients, to higher level frameworks, etc.
Portable: The runtime standard should be usable across different hardware, operating systems, and cloud environments.
Secure. Isolation should be pluggable, and the cryptographic primitives for strong trust, image auditing and application identity should be solid.
- Decentralized. Discovery of container images should be simple and facilitate a federated namespace and distributed retrieval.
Open. The format and runtime should be well-specified and developed by a community. We want independent implementations of tools to be able to run the same container consistently.
Code leads spec, rather than vice-versa. We seek rough consensus and running code.
- Minimalist: The spec should aim to do a few things well, be minimal and stable, and enable innovation and experimentation above and around it.
Backward compatible: Given the broad adoption of the current Docker container format (8B+ container downloads to date), the new standard should strive be as backward compatible as possible with that format.

You will note that a lot of these are directly adopted from the appc founding values. We want to make sure that this effort combines the best ideas from all existing efforts in this space.

## What has Docker done to help create this foundation?

Docker has donated both a draft specification for the base format and runtime and the code associated with a reference implementation of that specification, to the OCI. Docker has taken the entire contents of the [libcontainer project](https://github.com/docker/libcontainer), including nsinit, and all modifications needed to make it run independently of Docker, and donated it to this effort. This codebase, called runc, can be found at https://github.com/opencontainers/runc

## How has Docker’s role evolved since the OCI was formed? How does OCI fit into containerd?

Docker initially seeded runc to help form the OCI build the runtime specification. Recently, Docker announced that it is spinning out its core container runtime functionality into a standalone component, incorporating it into a separate project called containerd, and will be donating it to a neutral foundation early next year. Furthermore, containerd will include full OCI support, including the extended OCI image specification.

## What about other organizations? Where can I learn more about specific contributions to the project?

Details on specific contributions to the project are available here: https://oci.biterg.io/.
See also OCI Member Spotlights posted to the OCI blog, which includes Q&A with individual members.

## What is the legal and project structure?

- The OCI is run under the auspices of the Linux Foundation. It is intended to  be lightweight, with three layers of leadership: The Trademark Board (TB), Technical Leadership (TDC) and a Technical Oversight Board (TOB).
- The most important functions are done by the Technical Leadership (TDC) of the project, who are the contributors and maintainers of OCI.
- There is a Technical Oversight Board (TOB), composed of vendor-neutral individuals who provide oversight of the technical leadership and serve as a point of appeal. But, it is assumed that the technical leadership will do the right thing. We are not creating a structure for sponsors of the project to pay for the right to influence the technical direction of the project. Influence comes through code contribution.
- Finally, most of administrative and fiduciary duties and responsibilities are provided by the Linux Foundation, including:
    - Normal fiduciary responsibilities associated with the board of any foundation (approving budgets, auditing financials, etc.)
    - Setting policies for trademark enforcement
    - Appointing a director for OCI if necessary
    - Serving as a point of appeal if there are formal complaints about the TOB or technical leadership of the Projects failing to follow its established technical governance procedure

## Who is part of the technical leadership in OCI?
First off, the TOB is responsible for managing conflicts, violations of procedures or guidelines and any cross-project or high-level issues that cannot be resolved in the TDC for OCI Projects. Furthermore, the the technical leadership depends on the OCI project, which is who is listed in a MAINTAINERS file across OCI projects:

- https://github.com/opencontainers/runtime-spec/blob/master/MAINTAINERS
- https://github.com/opencontainers/runtime-tools/blob/master/MAINTAINERS
- https://github.com/opencontainers/runc/blob/master/MAINTAINERS
- https://github.com/opencontainers/image-spec/blob/master/MAINTAINERS
- https://github.com/opencontainers/image-tools/blob/master/MAINTAINERS
- https://github.com/opencontainers/go-digest/blob/master/MAINTAINERS
- https://github.com/opencontainers/distribution-spec/blob/master/MAINTAINERS

For a history of OCI project creation, you can view project proposals in the TOB README.

## What are the responsibilities of the Technical Oversight Board (TOB)?

You can follow the TOB on GitHub (https://github.com/opencontainers/tob) and their respective mailing list, but their responsibilities are:

- Serving as a source of appeal if the project technical leadership is not fulfilling its duties or is operating in a manner that is clearly biased by the commercial concerns of the technical leadership’s employers
- Reviewing the tests established by the technical leadership for adherence to specification
- Reviewing any policies or procedures established by the technical leadership.

## How is OCI different from a traditional standards group?

Traditional standards groups are generally architect-driven and usually code comes after the specifications are defined. Standards are built first, and then all products must adhere to those standards. The OCI seeks rough consensus and running code first. The OCI projects are being developed by the community, and independent implementations of tools are encouraged to ensure that the same container can be run consistently. The goal is to have multiple implementations and do thorough testing while the specification evolves over time.

## What is the OCI’s perspective on the difference between a standard and a specification?

A standard needs to live in a neutral place and is typically developed according to a specified set of rules and procedures providing consensus among many parties. Standards are often used as a reference design.
Specifications are generally works in progress, often developed by one entity which may use content from one or more standards and may alter said content to meet different needs.  Specifications are usually specific to one scenario and can cover multiple areas and topics, whereas a standard is typically more general and usually narrow in focus.  Specifications can also include non-standard materials and can be easily revised.
As we created the OCI, we wanted to be sure to have a trailing specification with leading implementations and to make things as lightweight as possible. The OCI is run more like a traditional open source project than a standards body, with a focus on running code through consensus. The OCI is providing a form and canvas for organizations to settle on rules for a variety of specs.

## Will OCI ever add additional specifications– such as networking, inter-container communication, or distribution– to its scope?

The OCI has purposefully been limited in scope, see the OCI Scope Table for more information. In the future, the scope may slightly expand to discuss items such as distribution, but there is nothing formally planned at the moment.

## When will v1.0.0 be released? What sort of release cadence should we expect moving forward?

The v1.0.0 release came out on 7/19/17. There are specific details in the RELEASES file in how releases are managed. For example, major specification releases must release at least three release candidates spaced a minimum of one week apart. This means a major release like a v1.0.0 or v2.0.0 release will take 1 month at minimum: one week for rc1, one week for rc2, one week for rc3, and one week for the major release itself. Minor and patch releases will be made on an as-needed basis.

## When will the Certification Program launch, and what will it mean for something to be “OCI-certified”? Will that certification give the industry true portability?

The OCI Certification Program is a work in progress and being built by the Certification Working Group within the OCI. The goal is the program is to build a certification process that allows OCI specification implementations to support a vendor-neutral process and requirements, including specifically, the ability for solutions to be certified on multiple operating systems and usable in multiple environment implementations.

## What sort of traction are you seeing from the wider community and end users?

Basically any popular technology that runs a container has been on its way to adopting OCI technology as we have been evolving the specifications. For example, the Cloud Foundry community has been an early consumer of OCI by embedding runc via Garden as the cornerstone of its container runtime technology. The Kubernetes project is incubating a new Container Runtime Interface (CRI) that adopts OCI components via implementations like CRI-O and rklet. The rkt community is adopting OCI technology already and is planning to leverage the reference OCI container runtime runc in 2017. The Apache Mesos community is currently building out support for the OCI image specification. Also, AWS announced that is supporting the OCI image format in its Amazon EC2 Container Registry (ECR).

Any container that runs in these environments is taking advantage of OCI efforts.

## Will the runtime and image format specs support multiple platforms?

Yes. For example, take a look at the runtime-specification configuration where it mentions example Linux, Windows and Solaris configurations. There are also multiple implementations of the runtime-specification that you can take a look at.

## How does OCI integrate with CNCF?
A container runtime is just one component of the cloud native technical architecture but the container runtime itself is out of initial scope of CNCF (as a CNCF project), see the charter Schedule A for more information. A more detailed view of the landscape can be viewed in the Cloud Native Landscape by CNCF, in particular the “container runtime” section: https://github.com/cncf/landscape

How do I join the OCI as an official member?
It’s very simple, first read the charter for more information and then find the right membership level for you based on company size. Email info@opencontainers.org for more information.
