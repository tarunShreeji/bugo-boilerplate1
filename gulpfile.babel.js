
import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import watch from 'gulp-watch';
import {spawn} from "child_process";
import shell from "gulp-shell";

const webpack = require('webpack-stream');
const exec = require('child_process').exec;
const del = require('del');

/**
 * Directories
 *
 * Groups have src and dest paths
 *
 **/

const dirs = {
  src: 'src',
  dest: 'static/assets'
};

const sassPaths = {
  src: `${dirs.src}/scss/**/*.scss`,
  dest: `${dirs.dest}/css/`
};

const jsPaths = {
  src: `${dirs.src}/js/**/*.js`,
  dest: `${dirs.dest}/js/`
};

const imagePaths = {
  src: `${dirs.src}/images/**/*.{png,gif,jpg,svg}`,
  dest: `${dirs.dest}/images/`
};

/**
 * Default Task
 **/

gulp.task('default', defaultTask);

/**
 * Install Bugo
 **/

gulp.task('install-bugo', installBugo );

/**
 * Compile SASS
 *
 * 1. Delete dest directory
 * 2. Recompiles all .scss files
 * 3. Write compiled .css files to dest directory
 *
 **/

gulp.task('compile-sass', (done) => {
  compileSass(done);
});

/**
 * Compile SASS
 *
 * 1. Delete dest directory
 * 2. Recompiles all .scss files
 * 3. Write compiled .css files to dest directory
 *
 **/

 gulp.task('compile-js', (done) => {
   compileJs(done);
});

/**
 * Process Images
 * Copy Images to the dest directory
 * todo: need to add image optimization
 **/

gulp.task('process-images', (done) => {
  processImages(done);
});

/**
 * Default Task Function
 * Spawns an instance of globally installed Hugo server that watches the site for
 * changes. When it detects a changes Hugo runs a build on the site and refreshes
 * current browsers.
 *
 **/

function defaultTask(){
  processImages();
  startBugo();
  watchSass();
  watchJs();
  watchImages();
}

/**
 * Spawn Bugo server that watches the site for changes
 **/

 function startBugo(){
    const hugo = spawn("hugo", ['-w','server','--disableFastRender','--destination=public']);
    // Log message from Bugo
    hugo.stdout.on('data', (data) => {
      console.log(`Bugo: ${data}`);
    });

    // Log Errors
    hugo.stderr.on('data', (data) => {
      console.log(`Bugo Error: ${data}`);
    });

    // Log Exit
    hugo.on('close', (code) => {
      console.log(`Bugo exited with code ${code}`);
    });
 }


/**
 * Watch the SCSS source folder for changes and recompile
 **/

function watchSass(){
  const sasswatcher = gulp.watch(sassPaths.src, gulp.parallel('compile-sass'));

  // log changes
  sasswatcher.on('change', function(path, stats) {
   console.log('File ' + path + ' was changed');
  });

  // log deletion
  sasswatcher.on('unlink', function(path) {
   console.log('File ' + path + ' was removed');
  });
}

/*
 * Watch the JS source folder for changes and recompile
 */

function watchJs(){
  const jswatcher = gulp.watch(jsPaths.src, gulp.parallel('compile-js'));

  // log changes
  jswatcher.on('change', function(path, stats) {
    console.log('File ' + path + ' was changed');
  });

  // log deletion
  jswatcher.on('unlink', function(path) {
    console.log('File ' + path + ' was removed');
  });
}

/*
 * Watch the images source folder for changes and reprocess images
 * NOTE: you shouldn't store the sites media here. this is mean for
 * theme images.
 */

function watchImages(){
  const imagewatcher = gulp.watch(imagePaths.src, gulp.parallel('process-images'));

  // log changes
  imagewatcher.on('change', function(path, stats) {
    console.log('File ' + path + ' was changed');
  });

  // log deletion
  imagewatcher.on('unlink', function(path) {
    console.log('File ' + path.path + ' was removed');
  });
}

/**
 * Run Interactive Installer
 * 1. Gather necessary information up front
 * 2. Install dummy content
 * 3. Install theme
 * 4. Install extra archetypes
 *
 **/

function installBugo(done = () => {}){
  processAssets();
  console.log('Installation complete! Thanks for installing Bugo! 🤘');
  done();
}

function processAssets(){
  compileSass();
  compileJs();
  processImages();
}

/**
 * Compile Sass
 **/

function compileSass(done = () => {}){
  del([sassPaths.dest+'/*']);
  console.log('Bugo: Compiling .scss into destination folder: '+sassPaths.dest);
  gulp.src(sassPaths.src)
    // .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest));
  console.log('Bugo: Done compiling .scss files');
  done();
}

/**
 * Compile JS
 **/

function compileJs(done = () => {}){
  del([jsPaths.dest+'/*']);
  console.log('Bugo: Compiling .js files into '+jsPaths.dest);
  gulp.src([
      jsPaths.src
    ])
		.pipe(webpack(require('./.webpack.config.js')))
    .pipe(concat('app.js'))
		.pipe(gulp.dest(jsPaths.dest));
  console.log('Bugo: Done compiling .js files');
  done();
}

/**
 * Process Images
 **/

function processImages(done = () => {}){
  del([imagePaths.dest+'/*']);
  console.log('Bugo: Processing images into '+imagePaths.dest);
  gulp.src([
      imagePaths.src
    ])
		.pipe(gulp.dest(imagePaths.dest));
  console.log('Bugo: Done processing images');
  done();
}
