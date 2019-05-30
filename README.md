# Bugo Framework

Bugo works best if you setup your infrastructure first. Go to the install instructions at [https://bugo.io/installation/](https://bugo.io/installation/ "https://bugo.io/installation/"). You can stop once you've configured Forestry.io.

The next step is to clone your new website's repository locally. 

    # git clone <your repository> --recursive
    # cd <your repository>

## Commands

* **npm install** - Install Bugo dependencies.
* **npm start** - Run a Hugo server that watches for changes in the files and rebuilds the website.
* **npm run add-bugo-theme** - Add a Bugo theme to the website.
* **npm run new-theme** - Creates a new theme for you to customize. You'll update themes here.
* **npm run build-theme** - Creates a timestamped compilation of the specified theme and Bugo themes and adds it as the primary Hugo theme in the config file.

## A Word About Hugo Themes

Hugo themes have one way inheritance. When you create a new theme in Bugo adds the new theme as the first theme in the Hugo config file this gives the new theme's files priority over the themes under it.

Bugo HTML and Bugo Source are preinstalled as submodules and are listed under your theme in the config file, so if you want to customize any aspect of the site, you can simply duplicate the file in your theme using the same path. The new file will override the file no matter what theme comes listed under it in the config file.