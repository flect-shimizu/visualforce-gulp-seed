var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
  return runSequence(
    'clean',
    'build',
    cb
  );
});

gulp.task('serve', function(cb) {
  return runSequence(
    "default",
    ['watch','browserSync'],
    cb
  )
});

gulp.task('build', function(cb) {
  return runSequence(
    'sass',
    ['css','images', 'markup', 'script' ,'bower'],
    cb
  );
});
