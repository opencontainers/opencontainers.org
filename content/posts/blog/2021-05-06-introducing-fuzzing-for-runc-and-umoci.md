---
title: Introducing fuzzing for runC and Umoci
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2021-05-06
---

Through March and April 2021 [Ada Logics](https://adalogics.com) contributed an extensive fuzzing infrastructure for the two Opencontainers projects runC and Umoci. The reason for initiating fuzz testing in the first place is to stress test projects for bugs and vulnerabilities. Fuzzing does this by generating pseudo-random inputs and leveraging coverage-based genetic algorithms to identify important inputs that may impose bugs in software. The technique has been used for more than two decades and in recent years has had a lot of momentum, including being applied on Golang programs (which is the language of runC and Umoci). Fuzzing can help with both finding bugs that have been present in code for a long time as well as finding recently-introduced bugs before they ship to production. In this project most of the fuzzers were set up to run in a continuous manner which makes them particularly well-suited for catching bugs early in the development cycle.

In total 17 fuzz tests were contributed to Umoci and runC, and they were submitted to both projects’ Github repositories. The fuzzers were implemented by way of the state-of-the-art [go-fuzz](https://github.com/dvyukov/go-fuzz) engine which has been used by developers and researchers for many years to find [a multitude of different types of bugs](https://github.com/dvyukov/go-fuzz#trophies) in open source Golang projects. 

Ada Logics integrated runC into [OSS-fuzz](https://github.com/google/oss-fuzz) which is a service where critical open source projects can run their fuzzers continuously using computational power provided by Google. To date, OSS-Fuzz has helped find more than 25,000 bugs in software, including critical bugs in Golang itself [that could take down the Ethereum network](https://adalogics.com/blog/the-importance-of-continuity-in-fuzzing-cve-2020-28362). As Umoci does not qualify for OSS-fuzz integration, Ada Logics provided an environment to make it easy for maintainers and contributors to run the fuzzers locally. 

The fuzzers did not find any bugs during the development phase itself which is a testament to the robustness of the two projects. However, many of the fuzzers still have a lot of code within their reach that is unexplored and OSS-Fuzz will continue to run the fuzzers leaving room for finding bugs and vulnerabilities.

The full report of the engagement can be found [here](/documents/Umoci_and_RunC_fuzzing_report.pdf).
