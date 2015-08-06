var gulp = require('gulp');
var browserSync  = require('browser-sync');
var babel = require('gulp-babel');
var concat = require("gulp-concat");
var config = require('../config').script;
var merge = require('event-stream').merge;

gulp.task("script", function() {
  return merge(
    gulp.src(config.src)
    .pipe(concat(config.filename)),
    gulp.src(config.mock))
    .pipe(babel())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
