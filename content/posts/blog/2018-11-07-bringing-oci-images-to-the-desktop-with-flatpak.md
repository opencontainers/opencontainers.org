---
title: Bringing OCI images to the desktop with Flatpak
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2018-11-07
---

By Alex Larsson and Owen Taylor

Over the last five years, containers have taken the server world by storm. Many of the same things that make containers well-suited for server-side computing — the ability to test code an environment that is very similar to the deployment environment, the ability to upgrade application software independently from the host operating system, the ability to deploy applications across multiple host operating systems — also make a lot of sense for desktop applications.

At the same time that container technologies were emerging on the server, the [Flatpak project](https://github.com/flatpak/flatpak/) was [being developed](https://blogs.gnome.org/alexl/2018/06/20/flatpak-a-history/) by a community of contributors, including engineers from Red Hat, Collabora, and Endless Mobile, as a way to improve application deployment on desktop Linux, and allow application authors to make their applications available directly to users. During the evolution of Flatpak, leading up to a 1.0 release in August 2018, it’s been possible to share technologies with server-side containers, from namespaces, to seccomp, to the OCI Image format.

## Containers for the Desktop

You might wonder if it would have been possible to go one step further and use a existing server-side [runtime](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction/#h.6yt1ex5wfo55), such as [runc](https://github.com/opencontainers/runc), to run containers on the desktop. While it is possible to use server containers for desktop applications and get basic functionality working, the desktop world is pretty different from the server world. Instead of integrating with storage-area-networks, network routing, and orchestration, a desktop application deals with USB input devices, geolocation, and desktop environment application menus. Server-side technology might have the ability to provide access to a device, or block it off, but can’t meaningfully handle interactively working with the user to establish fine-grained access control.

For this reason, Flatpak doesn’t use runc, but instead has its own runtime that runs within the user’s desktop session and provides services (called portals) that allow applications to access the desktop under the user’s control. A portal is a service, exposed via the D-Bus IPC protocol, that sits between the application and the resource the application wants to access (local files, printing, geolocation, etc.) and provides a user interface to let the user decide whether to allow access or not. Typically this is not done as a Yes/No question about permissions but instead as a natural part of the operation. For example, instead of asking a user “Allow application X to access your files?”, the user is shown a file selection dialog, and they can either pick a file to pass back to the application, or they can cancel the operation.

In addition to a unique desktop-focused security model, Flatpak has an approach to combining operating system and application content into a single container that was inspired by the requirements of the desktop. The typical model for a server container is that a base image is arbitrarily modified to create the application container. Each application container is its own mini-operating system, and in order to fix a bug or security hole in the base operating system, the application has to be rebuilt and deployed. The OCI layer system potentially optimizes the deployment step, but the rebuilds are still necessary, and production images are often “squashed” for maximum efficiency.

The downsides of having every application independent are minimized in the server environment: we usually have a small number of applications running on a node with abundant disk space and network bandwidth, and hopefully have automation to automatically rebuild applications as necessary, as well as paid sysadmins. On a desktop, we might instead have dozens or hundreds of applications installed on a much more modest device, maintained by individual users. We also don’t want software vendors to have to rebuild their application in order to pick up a fix to the base operating system.

For this reason, when a Flatpak application is executed, two separate filesystems are mounted in its environment – the runtime filesystem is mounted at the path /usr, and the application filesystem is mounted at /app. Library and other search paths in the applications execution environment are set up to search both directories so that code and resources can be bundled with the runtime or with the application. This way a single runtime can be reused by many applications, and can be updated without having to modify applications. Different applications can use different runtimes, so some applications might use a runtime that is maintained for long-term stability with few changes, and other applications might use a runtime that gets more rapid releases to pick up new library versions.

## Flatpaks as OCI Images

The native image format for Flatpaks is OSTree. It is a local storage format that automatically supports deduplication and versioning. It also naturally comes with a distribution framework, which most Flatpak repositories use. However, that is not the only distribution mechanism Flatpak supports.

Organizations seldom deploy only servers or only desktops. Having a unified way to distribute desktop applications and server applications can be highly desirable for sysadmins: they don’t really want to maintain both an OSTree repository, and a OCI registry (for servers). Luckily, the OCI format is sufficiently flexible that it is also suitable for storing desktop applications. Flatpak supports installing applications and runtimes from OCI images and a Flatpak remote can either be an ostree repository or a tentative version of the [OCI registry](https://github.com/opencontainers/distribution-spec) (distribution spec). At the end-user level the difference is invisible and all available sources of applications are integrated together and displayed to the user.

One of the basic advantages that the OCI Image format has over older image formats is the concept of annotations – in addition to a compressed filesystem and standard metadata such as the operating system, architecture, and author of the image, an OCI Image provides a set of arbitrary key/value pairs. When we’re storing a Flatpak as an OCI image, these annotations are used to store information like the permissions that the Flatpak requires and its installed size.

One thing that is still actively under development is browsing available Flatpaks. Typing ‘docker pull postgresql:latest’ may be a good user interface for the server command line, but  a desktop user typically wants a nice user interface with icons, human readable names, and a user-friendly description. These things can be stored in the OCI annotations of the individual images, but it’s also necessary to be able to efficiently download the information for all the images in the registry, without having to download each individual image. Currently, Flatpak supports a [draft metadata format and protocol](https://github.com/owtaylor/flagstate/blob/master/docs/protocol.md) for this. The [Flagstate](https://github.com/owtaylor/flagstate/) server allows adding this capability to an existing registry. Browsing and searching available images in a registry is useful beyond the desktop, so perhaps this is something that future versions of the OCI distribution specification can address.

As Flatpaks become more commonly used as a way to distribute desktop applications, users can benefit from an expanded set of available applications, with more robust upgrades and enhanced security. Using OCI Images and the OCI distribution mechanism as a deployment technology enables sysadmins to have a unified way of managing and distributing server side and desktop applications within their organization.

Hundreds of applications from Inkscape and Blender, to LibreOffice, to SuperTuxKart, are already available as Flatpaks. Flatpak is installed by default on current versions of some Linux distributions and can be easy to install on most others. [Instructions for getting started](https://flatpak.org/setup/) can be found on flatpak.org.

***

Alex Larsson is a Senior Principal Software Engineer at Red Hat and the creator of Flatpak.

Owen Taylor is a Principal Software Engineer at Red Hat, and architect for Red Hat’s desktop and workstation engineering team.
