---
title: New OCI Artifacts Project
author:
  name: Steve Lasker
  tag: slasker
  twitter: stevelasker
tags: blog
date: 2019-09-10

---

The OCI Technical Oversight Board (TOB) has [approved](https://github.com/opencontainers/tob/blob/master/proposals/artifacts.md) a new Artifacts project, utilizing the [OCI manifest](https://github.com/opencontainers/image-spec/blob/master/manifest.md) and [OCI index](https://github.com/opencontainers/image-spec/blob/master/image-index.md) definitions, new artifact types can be stored and served using the [OCI distribution-spec](https://github.com/opencontainers/distribution-spec/) without changing the actual distribution spec. This repository will provide a reference for artifact authors and registry implementers for supporting these new artifact types themselves with the existing implementations of distribution.

Registries are a defacto part of a container workflow, streamlining development, deployment, and operations. When a developer wishes to share a built image, they push to a registry. When a CI/CD solution builds and deploys an image, it’s built FROM a registry, pushed to a registry, where it can be vulnerability scanned and signed. When a container host, such as Kubernetes, is requested to run an image, scale a pod, or replace a failed node, it must pull the image from a registry. Registries aren’t just development resources, rather they’re considered production, operationally dependent resources, locked down for network and security requirements.

Recognizing the need for vendor neutrality, in March of 2018, Docker contributed their work on distribution to the OCI. The [oci distribution-spec](https://github.com/opencontainers/distribution-spec) provides a vendor neutral, cloud agnostic spec to share, secure and deploy container images. Cloud providers and vendors implemented the [oci distribution-spec](https://github.com/opencontainers/distribution-spec), enabling optimized experience on a standard set of APIs, enabling this rich end to end experience.

## There’s More Than Just One Type

Once clients get past single container deployments, they quickly realize they need additional artifacts to define deployments, such as Kubernetes deployment files, [Helm Charts](https://helm.sh), [CNAB](https://cnab.io) and new evolving formats. At the same time, new runtime and tools are evolving, such as the [Singularity](https://github.com/sylabs/singularity) project, for running high-performance computing workloads and [Open Policy Agent (OPA)](https://github.com/open-policy-agent/opa/issues/1413) for declarative policy based access control. Clients and end users needed investment across the industry and collaboration with members of the [Helm](https://github.com/orgs/helm/people), [Chart Museum](https://github.com/orgs/chartmuseum/people), [CNAB](https://cnab.io), [Singularity](https://github.com/orgs/sylabs/people), [OPA](https://github.com/open-policy-agent), and the [OCI community](https://github.com/orgs/opencontainers/people), and [so many more](https://github.com/orgs/opencontainers/people) to leverage the work in the oci distribution-spec.

## Inverting the Plug-in Model

In evaluating the plug-in model used for many tools, we considered whether each registry should implement cloud specific tooling for specific artifacts. This would force each artifact owner to work with each cloud operator and vendor of distribution, fracturing the common docker push/pull experience and the sense of one community focused on developer and user experience with artifacts.

We wanted each artifact author to own their experience, with their toolset. By inverting the model, where each artifact toolset could leverage standard registry APIs, authors could tailor the experience as it applied to them. Building on the [oci-manifest](https://github.com/opencontainers/image-spec/blob/master/manifest.md) and [oci-index](https://github.com/opencontainers/image-spec/blob/master/image-index.md) schema formats, artifact owners can define their persistence format, fitting into the manifest, tagging and layer format defined in the [oci distribution-spec](https://github.com/opencontainers/distribution-spec), As a result, customers will be able to use `helm registry login`, `helm chart push`, `helm chart pull` with standard content-addressable URLs. We took the experience further by developing an **O**CI **R**egistry **A**s **S**torage ([ORAS](http://github.com/deislabs/oras)) library for pushing and pulling content to an OCI Artifact registry.

## What’s Next for OCI Artifacts

We’re thrilled to see OCI Artifacts be adopted by OCI as a means for artifact authors to define their content. The [OCI Artifact repo](https://github.com/opencontainers/artifacts) will evolve to provide artifact owners info for how they author their types, while registry operators will have a means to discover well known artifact types, providing great customer experiences for browsing, securing and deploying all artifact types.

[Stay tuned](https://github.com/opencontainers), [get involved](https://www.opencontainers.org/community) and follow along on [social](https://twitter.com/OCI_ORG) for exciting updates on [OCI Artifacts](https://github.com/opencontainers/artifacts)!
