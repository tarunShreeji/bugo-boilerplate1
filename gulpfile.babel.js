
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


gulp.task('compile-sass', (done) => {
  del([sassPaths.dest]);
  // gulp.src('*.*', {read: false})
  //       .pipe(gulp.dest(sassPaths.dest));
  gulp.src(sassPaths.src)
    // .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest));
    done();
});

gulp.task('compile-js', (done) => {
  del([jsPaths.dest]);
  // gulp.src('*.*', {read: false})
  //       .pipe(gulp.dest(jsPaths.dest));
  gulp.src([
      jsPaths.src
    ])
		.pipe(webpack(require('./.webpack.config.js')))
    .pipe(concat('app.js'))
		.pipe(gulp.dest(jsPaths.dest))
    done();
});

gulp.task('process-images', (done) => {
  del([imagePaths.dest]);
  gulp.src('*.*', {read: false})
        .pipe(gulp.dest(imagePaths.dest));
  gulp.src([
      imagePaths.src
    ])
		// .pipe(webpack(require('./.webpack.config.js')))
		.pipe(gulp.dest(imagePaths.dest))
    done();
});

gulp.task('default', defaultTask);

function defaultTask(){

  const hugo = spawn("hugo", ['-w','server','--disableFastRender']);
  hugo.stdout.on('data', (data) => {
    console.log(`Hugo: ${data}`);
  });

  hugo.stderr.on('data', (data) => {
    console.log(`Hugo Error: ${data}`);
  });

  hugo.on('close', (code) => {
    console.log(`Hugo exited with code ${code}`);
  });

  const jswatcher = gulp.watch(jsPaths.src, gulp.parallel('compile-js'));
  jswatcher.on('change', function(path, stats) {
    console.log('File ' + path + ' was changed');
  });

  jswatcher.on('unlink', function(path) {
    console.log('File ' + path + ' was removed');
  });

  const sasswatcher = gulp.watch(sassPaths.src, gulp.parallel('compile-sass'));
  sasswatcher.on('change', function(path, stats) {
    console.log('File ' + path + ' was changed');
  });

  const imagewatcher = gulp.watch(imagePaths.src, gulp.parallel('process-images'));
  imagewatcher.on('change', function(path, stats) {

    console.log('File ' + path + ' was changed');
  });

  imagewatcher.on('unlink', function(path) {
    console.log('File ' + path.path + ' was removed');
  });
}
