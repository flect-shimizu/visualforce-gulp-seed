'use strict';
var gulp = require('gulp');
var replace = require("gulp-replace");
var htmlreplace = require('gulp-html-replace');
var merge = require('event-stream').merge;
var salesforce = require('../../config-sf').build;

gulp.task('sfbuild',['build'], function () {
  return merge(
    gulp.src(salesforce.staticresources, {
      base: salesforce.buildbase
    })
    .pipe(gulp.dest(salesforce.pkg.inputPath + salesforce.pkg.staticResourceFolder + "/" + salesforce.resourceName)),
    gulp.src(salesforce.pages, {
      base: salesforce.srcbase
    })
    .pipe(replace(/src=(.+?)\/img\//g, "src=$1/" + salesforce.pkg.staticResourceFolder + salesforce.resourceName + "/img/"))
    .pipe(htmlreplace(salesforce.links))
    .pipe(gulp.dest(salesforce.pkg.inputPath))
  )
});

