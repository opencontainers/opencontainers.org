# opencontainers.org

This repository hosts the content and static site generator for the https://opencontainers.org website. 

The starter uses the following:
* **[Hugo](https://gohugo.io/)** as a static site generator
* **[Tailwind CSS](https://tailwindcss.com/)** as a CSS framework
* **[Netlify](https://www.netlify.com/)** for building and hosting.

# Contributing 

To make changes to https://opencontainers.org, create a fork of this repository and submit a pull request upstream. Upstream pull requests generate a preview URL using Netlify. 

## Prerequisites 

- Read and abide by the [code of conduct](https://github.com/opencontainers/.github/blob/master/CODE_OF_CONDUCT.md)
- Sign the [CNCF CLA](https://github.com/kubernetes/community/blob/master/CLA.md)

## Running locally

Install [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/), then run the following commands in your local repository:

```shell
yarn
# Run the server locally
make serve
```
This installs Hugo and all other dependencies.

## Writing blog posts, news updates, and announcements

The OCI has 3 categories of posts, all stored in the `/content/posts` directory:

- `/news`: news stories from external sources about the OCI
- `/blog`: blog posts published about by the OCI
- `/announcements`: press releases published by the OCI or Linux Foundation for distribution

When writing a post:

1. Pick the appropriate category for your post.
2. Create a markdown file. To keep things easy for others, name it in the following format: `YYYY-MM-DD-your-title-here.md`. 
3. Include the following tags in the front matter:

  Tag | Description | Notes 
  --- | --- | --- |
  `title` | The post's title. | Required for all posts. Do not include colons (`:`) 
  `subhead` | The post's [subheadline](https://opencontainers.org/posts/announcements/2018-08-29-oci-welcomes-alibaba-cloud/) – Appears as an H2 above the body text. | Optional for announcements, news. 
  `author.name` | The author name. Appears below the page title. | Required for all posts. 
  `author.tag` | The author tag. | Optional. 
  `tags` | The post's tags. | Optional. 
  `date` | The post's date, in `YYYY-MM-DD` format. | Required for all posts. 
  `readMore` | The external URL of a news article. | Optional for news. (you can include a read more link link in the body too!) 


Here's a sample of front matter for a blog post:

```yaml
---
title: OCI 2019 Elections and New TOB Lineup
author:
  name: Open Container Initiative
  tag: oci
tags: blog
date: 2019-02-11
---
```

Here's a sample of front matter for an announcement:

```yaml 
---
title: Open Container Initiative Continues Momentum with New Members
subhead: Initiative welcomes 99Cloud, Kontena and OpenStack Foundation to collaboratively accelerate industry container specifications  
author:
  name: Kristen Evans
  tag: kevans
tags: announcement
date: 2018-03-14
---
```

Here's a sample of front matter for a news post: 

```yaml
---
title: Container Journal – “OCI Launches Artifacts Project to Reduce Registries Required”
author:
  name: Kristen Evans
  tag: kevans
tags: news
date: 2019-09-10
---
```

### Adding images, videos, and tweets

Put images in the `/static/img/blog` directory. Create a subdirectory for each post.

You can then access your image for the blog post at `img/blog/your-subdir`:

```md 
![Alt text for screen readers](img/blog/your-subdir/your-image.png)
```
> **Note:** Use binary formats like PNGs and JPGs for blog posts. Markdown cannot scale images and SVGs tend to show up huge!

To add YouTube videos, specify the video ID in Hugo's built-in shortcode:

```go 
{{< youtube 56ftznhkdh0 >}}
```

where the video located at `https://www.youtube.com/watch?v=56ftznhkdh0` has the ID `56ftznhkdh0`.


To add a tweet to a post, use the tweet ID in Hugo's built-in shortcode:

```go
{{ tweet 1265674271776440321 }}
```

For example, the tweet located at `https://twitter.com/CloudNativeFdn/status/1265674271776440321` has the ID `1265674271776440321`.
