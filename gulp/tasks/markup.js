var gulp = require('gulp');
var config = require('../config').markup;
var htmlreplace = require('gulp-html-replace');
var browserSync  = require('browser-sync');

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(htmlreplace(config.links))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
