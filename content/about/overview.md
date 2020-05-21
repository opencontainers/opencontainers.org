---
title: "About the Open Container Initiative"
---

The Open Container Initiative (OCI) is a lightweight, open governance structure (project), formed under the auspices of the Linux Foundation, for the express purpose of creating open industry standards around container formats and runtime. The OCI was launched on June 22nd 2015 by Docker, CoreOS and other leaders in the container industry

The OCI currently contains two specifications: the Runtime Specification (runtime-spec) and the Image Specification (image-spec). The Runtime Specification outlines how to run a “filesystem bundle” that is unpacked on disk. At a high-level an OCI implementation would download an OCI Image then unpack that image into an OCI Runtime filesystem bundle. At this point the OCI Runtime Bundle would be run by an OCI Runtime.

This entire workflow should support the UX that users have come to expect from container engines like Docker and rkt: primarily, the ability to run an image with no additional arguments:

- docker run example.com/org/app:v1.0.0
- rkt run example.com/org/app,version=v1.0.0

To support this UX the OCI Image Format contains sufficient information to launch the application on the target platform (e.g. command, arguments, environment variables, etc). This specification defines how to create an OCI Image, which will generally be done by a build system, and output an [image manifest](https://github.com/opencontainers/image-spec/blob/master/manifest.md), a [filesystem (layer) serialization](https://github.com/opencontainers/image-spec/blob/master/layer.md), and an [image configuration](https://github.com/opencontainers/image-spec/blob/master/config.md). At a high level the image manifest contains metadata about the contents and dependencies of the image including the content-addressable identity of one or more filesystem serialization archives that will be unpacked to make up the final runnable filesystem. The image configuration includes information such as application arguments, environments, etc. The combination of the image manifest, image configuration, and one or more filesystem serializations is called the OCI Image.

Docker is donating its container format and runtime, runC, to the OCI to serve as the cornerstone of this new effort. It is available now at https://github.com/opencontainers/runc.

The Open Container Initiative is an open governance structure for the express purpose of creating open industry standards around container formats and runtime. Projects associated with the Open Container Initiative can be found at https://github.com/opencontainers and we recommend you get involved with the community athttps://www.opencontainers.org/community.
