---
title: OCI Member Spotlight – ContainerShip
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2017-01-12
---

The OCI community is comprised of a diverse set of member companies that are committed to creating open industry standards around a container image format and runtime. This blog series highlights OCI members and their contributions to building an open, portable and vendor neutral specification.

**Name:** Norman Joyner  
**Title:** CTO  
**Company:** ContainerShip  

**Why did you join OCI?**  
Standardization and portability are core to ContainerShip’s vision of the future of web infrastructure. These characteristics lay the groundwork for organizations to more easily attain true hybrid and multi-cloud hosting, in a quicker, and more repeatable fashion. Joining OCI was a no-brainer as it aligns with our mission, and allows us to help shape standards for container technologies now and in the future.

**How is your organization involved in OCI?**  
We are currently in the process of implementing the draft OCI runtime and image format specifications as defaults in containership, our open source container management platform. We look forward to contributing back to the OCI community as we finalize our implementation, and maintain it in the future.

**What are the aspects of the the runtime spec and/or image format spec that you are looking forward to most for your company?**  
The hook specification in the runtime helps enable our container management platform gain access to all phases of a container lifecycle in order to inject platform-specific information to facilitate in the scheduling and manipulation of containers across clusters.

**How do you plan to use the runtime spec and/or image format spec?**  
Our team is working diligently to implement runc (the default runtime-spec implementation) as the default container runtime on containership. Our internal codebase is predominantly written in node, so as part of our implementation we are also actively working on a node runc remote API client that will be open-sourced for the rest of the community to use.

**How will these specifications help your business?**  
There remains uncertainty from many end users regarding the rapidly evolving infrastructure toolset. OCI provides our users peace of mind, knowing our technology is built on industry standards. Our business is able to provide our customers with a solution capable of running across a variety of platforms in a consistent manner.

**How do you anticipate OCI changing the container technology landscape?**  
OCI’s work is poised to standardize workloads across all computing environments, public and private clouds alike. This standardization is fundamental to increased team collaboration, workload portability, application scalability, as well as increased application delivery speed. As software continues to “eat the world,” these attributes are key to the success of all businesses, not just strictly software companies. I believe the standards OCI is putting in place today will continue to increase container adoption, and the aforementioned benefits will more soon be realized.

**What do you believe the benefits of using a runtime and image spec based on the OCI standard are for hosting providers? For small ISVs, application developers? For end users?** 
OCI standards promote interoperability and help prevent vendor lock-in. This is a huge win for application developers, as platforms such as containership which implement the specification, will unlock a wealth of cloud providers to choose from and migrate between.

**What advice would you give to someone considering joining OCI?**  
There’s no time like the present. Join the OCI community to help shape industry standards; your input is appreciated!
