/*
  It require packages:
  npm install --save-dev gulp-util
  npm install --save-dev gulp-print
  npm install --save-dev gulp-less
  npm install --save-dev del
  npm install --save-dev gulp-plumber
  npm install --save-dev gulp-autoprefixer
  npm install --save-dev gulp-load-plugins
  npm install --save-dev yargs
  npm install --save-dev gulp-if
  npm install --save-dev gulp-angular-templatecache
  npm install --save-dev gulp-minify-html
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');

var tmp = './.tmp/';
var htmlTemplates = './src/app/**/*.html';
var templatecache = {
  file: 'templates.js',
  options: {
    module: 'gulpStart',
    standAlone: false,
    root: 'app/'
  }
};

gulp.task('templatecache', ['clean'], function() {
  return gulp
    .src(htmlTemplates)
    .pipe($.minifyHtml({empty:true}))
    .pipe($.angularTemplatecache(templatecache.file, templatecache.options))
    .pipe(gulp.dest(tmp));
});

function log(message) {
  $.util.log($.util.colors.blue(message));
}
