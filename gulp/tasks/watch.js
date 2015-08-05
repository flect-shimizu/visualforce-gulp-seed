/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.script.src, ['script']);
  gulp.watch(config.script.mock, ['script']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
