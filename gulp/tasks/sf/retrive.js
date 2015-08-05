'use strict';
var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var salesforce = require('../../config-sf');
var visual = require('node-visualforce-module');

gulp.task('retrieve', function() {
  var retrieve = visual.retrieve(salesforce.retrieve);
  retrieve.execute();
});