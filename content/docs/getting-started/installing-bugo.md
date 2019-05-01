---
layout: page
featured_image:
  template: Default
  title: ''
  image: ''
  caption: ''
title: Installing Bugo
date: '2019-04-30T07:00:00+00:00'
slug: ''
aliases: []
page_meta:
  meta_title: Installing Bugo
  meta_keywords: ''
  meta_description: Learn to install the Bugo framework on your computer.
video_gallery:
  videos: []
categories: []
tags: []

---
## GitHub

A lot of the magic that is Bugo counts on GitHub repositories. You'll need a GitHub account to get started, so head on over to GitHub and get one. We'll wait. 

Now that you've got your account, you'll have to make a choice. Do you want to use an off the shelf design, or do you want to install on your computer to fully customize your site?

If you want to use one of our themes of the shelf, you can use anyone of our super easy One Click Installs. Head over to our One Click Installs page and follow the directions there.

In order to customize your site, beyond the Bugo theme's capabilities you'll need to install locally. You should have some basic skills to proceed. We'll assume you've got basic web development skills. 

## Installing Bugo Locally

Looks like you want to go whole hog. Well you've got decisions to make again.

### How should you handle Media?

Bugo has two ways of dealing with media, you can have it stored in your website's repository or use Cloundinary.com's CDN. It really depends on your needs. 

**Store in Repository**

Storing images in your repository is easy and as long as you keep your media library small you won't see any performance issues. In most cases you'll be serving the website from a cloud-based provider, so you'll get pretty good download speeds anywhere in the world. This is perfect for blogs that don't have images or other media. You wouldn't want to store videos or a lot of large unprocessed images.

**Cloudinary.com**

Cloudinary is a full-featured CDN with image transformations that are really impressive. So why a CDN if the website is going to be cloud-based?

1. As the media library grows, so does Bugo's build times
2. Cloudinary has image transformations which can do some amazing things from cropping and coloring to AI powered object searches
3. Bugo themes have built-in transformations to optimize your media delivery.

If this is more you're cup-o-tea you should sign up for an account before installing.