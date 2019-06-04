# Bugo Boilerplate

Bugo Boilerplate is a framework built to make quick work of developing website. It rely's heavily on Hugo, Forestry and Netlify. You'll need accounts for Forestry and Netifly.

## Installing Bugo

### Quick Start

If want get started you can just clone this repository

    # git clone https://github.com/bugoio/bugo-boilerplate.git

### Full Install

Bugo works best if you setup your CMS first. Go to the install instructions at [https://bugo.io/installation/](https://bugo.io/installation/ "https://bugo.io/installation/"). You can stop once you've configured Forestry.io.

The next step is to clone your new website's repository locally.

    # git clone <your repository> <your website>--recursive
    # cd <your website>

## Bugo Commands

* **npm install** - Install Bugo dependencies.
* **npm start** - Run a Hugo server that watches for changes in the files and rebuilds the website.
* **npm run new-theme** - Creates a new theme for you to customize. You'll update themes here.
* **npm run build-theme** - Creates a timestamped compilation of the specified theme and Bugo themes and adds it as the primary Hugo theme in the config file.

## Working with Bugo

Bugo takes advantage of Hugo's themes as components feature to allow you to manage the iterations of your website's theme.

You're workflow is:

1. Install Bugo Locally
2. Add a new theme
3. Customize your new theme
4. Build your theme

### Install NPM Packages

    # npm install
    # npm start

You should now have a website running at [http://localhost:1313](http://localhost:1313 "View my site"). This server will watch for changes to the files in your website and rebuild the website and server the new changes.

### Create New Theme

    # npm run new-theme

Follow the prompts to complete creating a new theme. The process will create a new theme with custom files and add the theme as the primary theme in the Hugo config file.

Bugo Boilerplate has two component themes. Bugo Templates and Bugo Source.

#### Templates

Bugo uses Hugo templates that are written in Go. To customize your site's HTML copy the file in either component into the same directory structure in Bugo Templates. The new file will now override the template in Bugo Templates. This leaves you a clean upgrade path for Bugo Templates and allows you override it in your them.

[More on Hugo Templates](https://gohugo.io/templates/introduction/ "Learn more about Hugo Templates")

#### Styles

Bugo Source contains all the styles for Bugo Boilerplate. The folder `themes/bugo-src/assets/theme/` contains all the bootstrap variables and theme variables. The file `themes/bugo-src/assets/theme/theme.scss` is processed by Bugo, so you can use Hugo variables and logic in this file. It is already processing colors set in `/data/styles.config`

To customize your website's styles you can simply add CSS or SASS to the custom.scss file. You can also copy a SCSS file from Bugo Source into the same structure to override the boilerplate settings.

#### Javascript

You can add javascript to your website by adding a .js file to your themes asset folder at `themes/<your website>/assets/js`. All javascript is transpiled into a single javascript file at `/static/assets/js/main.js`.

All npm packages are managed at the root level of the website. You can use npm to install any extra packages you need. We've already included some useful packages.

### Build Theme

When you're ready to launch your website you can run

    # npm run build-theme

This will compile Bugo Templates, Bugo Source and your theme into a single timestamped theme and update `/config.yml` to use only the new timestamped theme. If you need to update the website, you just remove the time stamped theme from the config file and add Bugo Templates, Bugo Source and your source theme. Then all you have to do is run build-theme again when you're done.

We do this, so that upgrading Bugo Templates or Bugo Source will not affect your site until you build the theme again.
