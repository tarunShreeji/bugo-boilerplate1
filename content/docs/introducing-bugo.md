---
layout: page
featured_image:
  template: Default
  title: ''
  image: ''
  caption: ''
title: Introducing Bugo
date: '2019-04-30T07:00:00+00:00'
slug: ''
aliases: []
page_meta:
  meta_title: Introducing Bugo
  meta_keywords: ''
  meta_description: Bugo is a full-featured framework for building static websites.
video_gallery:
  videos: []
categories:
- Releases
tags: []

---
Bugo is a framework designed to make developing full-featured websites using a JAMstack. By combining a few services and a development platform, Bugo does away with all the databases, security issues, and plugin updates. Freeing you up to have fun again and build an awesome website.

## Accounts

JAMstack is a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience. Bugo uses a JAMStack approach to developing and deploying websites, you'll need to have a few accounts before you get started. Read below to determine which accounts you'll need.

### GitHub

A lot of the magic that is Bugo counts on GitHub repositories. You'll need a GitHub account to get started. Fortunately you can use your GitHub account to create most of the other accounts you'll need. If you have one already, great. If not, head on over to GitHub and get one. We'll wait. 

[![](/assets/uploads/GitHub_Logo_250.png)](https://github.com/join "Get a GitHub Account")

### Content Management System

You'll need a way to create and edit content on your website, so sign up for an account at [Forestry.io](https://forestry.io "Create an account at forestry.io"). NOTE: you can use you're GitHub account to keep those login and passwords down.

![](/assets/uploads/forestry-pos-full.png)

### Media Library

There are a couple choices for setting up your media library. You images can be stored along with our website's code, or you can use a CDN. Bugo supports [Cloudinary.com](https://cloudinary.com). 

The advantage over using cloudinary.com is their transformations. Bugo offers Cloudinary support and the themes can automatically crop and size you're images. If you don't have the resources or time to crop images this is the way to go for sure.

![https://cloudinary.com](/assets/uploads/cloudinary_100.png "Create a Cloudinary.com account")

### Hosting

You've got a lot of choices when it comes to hosting. 

[**Forestry**](https://forestry.io "Go to forestry.io") offers a few different ways to deploy your site. Currently you can:

* Save to your repository (saves your content, but doesn't deploy your site)
* **GitHub Pages**. You've already got an account. If you don't need to process a form, this is great. You can use services to get around the form processing issue too.
* **FTP.** If you'v already got a web server and want to use it. If you store your images with the code, deploys can take a long time.
* **Amazon S3**. Use this if you need more control over your hosting. This will require familiarity with Amazon S3 and CloudFront. 

[**Netlify**](https://netlify.com "Go too Netlify.com") is a JAMstack friendly service that offers much more than just the hosting of your website. Their free account can send up to 1000 forms via email and can be accessed via their dashboard. This should be enough for the average contact form. They offer deployments that are triggered when your code is updated, so it's a pretty hands off system once your setup.