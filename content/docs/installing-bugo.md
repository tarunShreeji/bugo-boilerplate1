---
layout: page
featured_image:
  template: Default
  title: ''
  image: ''
  caption: ''
title: Installing Bugo For Developers
date: 2019-04-30T07:00:00.000+00:00
slug: ''
aliases: []
page_meta:
  meta_title: Installing Bugo For Developers
  meta_keywords: ''
  meta_description: Learn to install the Bugo framework on your computer.
video_gallery:
  videos: []
categories: []
tags: []
weight: 3

---
Looks like you want to go whole hog. In order to customize your site, beyond the Bugo theme's capabilities you'll need to install Bugo locally. You should have some basic skills to proceed. We'll assume you've got basic web development skills.

You'll need the following accounts. For more info go to the [accounts page](/docs/accounts/ "Read more about necessary accounts.").

* GitHub.com
* Forestry.io
* Cloudinary.com (optional)
* Netlify (optional)

## Creating the website

First we'll setup a website at the CMS service Forestry.io by clicking the button below. This will take you through the following steps.

1. Creating a copy of Bugo Boilerplate into a repository at GitHub
2. Import repository into Forestry.io

[<span class="btn btn-primary">Import Bugo Boiler Plate to Forestry.io</span>](https://app.forestry.io/quick-start?repo=matt-antone/bugo-boilerplate-theme&provider=github&engine=hugo&version=0.5.4 "Import Bugo Boiler Plate")

## Set up Forestry

You should now be in the imported website at Forestry.io. There are four steps for forestry's set up.

1. **Set up the sidebar.** You can skip this. We've already done that for you.
2. **Import Media.** If you want to use Cloudinary.com, you'll set that up here. Otherwise media will be saved to your library.
3. **Set up preview command.** You can skip this. Previews are buggy with Bugo right now.
4. **Set up deployment.** You'll setup your hosting here.

## Install your local copy

You need to have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Bugo. We'll be using npm to install a local version

## 