var gulp = require('gulp');
var concat = require("gulp-concat");
var config = require('../config').css;
var browserSync  = require('browser-sync');

gulp.task('css', function() {
  return gulp.src(config.src)
    .pipe(concat(config.filename))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
