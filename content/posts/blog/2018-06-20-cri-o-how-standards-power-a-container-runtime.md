---
title: CRI-O – How Standards Power a Container Runtime
author:
  name: Joe Brockmeier
  tag: jbrockmeier
tags: blog
date: 2018-06-20
---

By Joe Brockmeier, Red Hat

The [CRI-O project](http://cri-o.io) (part of the former Kubernetes incubator) is busy working on the upcoming 1.11 release, which will be released in conjunction with the Kubernetes 1.11 release. It will have some interesting new features, but won’t lose sight of its stated No. 1 goal: to never break Kubernetes. Parallel to that goal is to run any OCI image from any registry (when the OCI [distribution specification](https://github.com/opencontainers/distribution-spec) is finalized).

Historically, Kubernetes has worked with container runtimes that were designed to do many things: build container images, manage container security, manage container orchestration, inspect container images, etc. CRI-O, on the other hand, was designed just to support the functions Kubernetes needs to actually run containers.

## Depending on Standards

CRI-O moves in lock-step with Kubernetes’ Container Runtime Interface (CRI), the API for container runtimes to integrate with a [kubelet](https://kubernetes.io/docs/concepts/overview/components/#kubelet). CRI-O is aligned with the upstream Kubernetes releases, so any changes to the CRI in Kubernetes are supported in the matching release of CRI-O for that release. For example, the most recent CRI-O 1.10 release matches Kubernetes 1.10. CRI-O 1.11 will release with Kubernetes 1.11, and so forth.

Most users these days are using Kubernetes with a version of Docker, but some organizations with different business needs might want to use new container types that haven’t been implemented yet, or others [like Kata Containers](https://medium.com/cri-o/cri-o-and-kata-containers-closer-than-ever-bd0233d6febf). CRI-O opens the door for this by supporting any OCI images and runtimes.


![CRI-O diagram](/img/blog/2018-06-20-cri-o/crio.png)

Here’s how it works:

- Kubernetes asks the kubelet to start a pod
- The kubelet talks to the CRI-O daemon using the CRI
- CRI-O uses a library that implements the OCI standard to pull the image from  a registry
- CRI-O uses another standard library to unpack the container image for use
CRI-O then generates a JSON file that describes how the container is to be run
- Next, CRI-O launches an OCI-compatible runtime (currently runc or the Clear Containers runtime) to run the container processes
- A common process handles logging for the container and monitors the process

You might also be wondering about networking. Again, the idea is to have flexibility within a standard interface, so CRI-O uses the [Container Networking Interface (CNI)](https://github.com/containernetworking/cni) to set up networking. Any CNI plugin can be used with CRI-O, giving users flexibility over their container networking stack as well.

CRI-O helps achieve what the OCI specifications and CRI API set out to do – make the container runtime an implementation detail that the end user doesn’t have to worry about. Worry about how Kubernetes works with your application, not how Kubernetes works with the container runtime.

## Learning More about CRI-O

Want to learn more about CRI-O? Of course you do! For now the best resources on CRI-O are the [README](https://github.com/kubernetes-incubator/cri-o/blob/master/README.md) on GitHub, the [accompanying tutorial](https://github.com/cri-o/cri-o/blob/master/tutorial.md), and be sure to watch the [CRI-O blog](https://medium.com/cri-o).
