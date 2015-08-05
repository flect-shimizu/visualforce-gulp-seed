var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var config = require('../config').bower;

//
// concat *.js to `vendor.js`
// and *.css to `vendor.css`
// rename fonts to `fonts/*.*`
//
gulp.task('bower', function() {
  var jsFilter = gulpFilter('**/*.js', {restore: true})
  var cssFilter = gulpFilter('**/*.css', {restore: true})
  var files= mainBowerFiles();
  return gulp.src(files) 
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.dist.js))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(config.dist.css))
//    .pipe(cssFilter.restore)
//    .pipe(rename(function(path) {
//      if (~path.dirname.indexOf('fonts')) {
//        path.dirname = '/fonts'
//      }
//    }))
//    .pipe(gulp.dest(config.dist.vendor))
})