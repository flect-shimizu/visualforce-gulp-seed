var gulp = require('gulp');
var salesforce = require('../../config-sf').build;
var htmlreplace = require('gulp-html-replace');
var visual = require('node-visualforce-module');
var vf = require('./vfConvert');

gulp.task('pkg', ['sfbuild'], function () {
  // node-visualforce-moduleを使ってデプロイできる状態にビルド
  var build = new visual.build(salesforce.pkg);
  build.execute(function (args) {
    console.log('its done!!!');
    return gulp.src(salesforce.pkg.outputPath + "pages/**.page")
      .pipe(htmlreplace(salesforce.links))
      .pipe(vf())
      .pipe(gulp.dest(salesforce.pkg.outputPath + "pages"))
  });
});