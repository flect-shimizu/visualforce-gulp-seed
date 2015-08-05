'use strict';
var gulp = require('gulp');
var salesforce = require('../../config-sf');
var visual = require('node-visualforce-module');

gulp.task('retrieve', function() {
  var retrieve = visual.retrieve(salesforce.retrieve);
  retrieve.execute();
});
