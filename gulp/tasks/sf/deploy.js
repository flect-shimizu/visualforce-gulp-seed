/* global process, __dirname */
'use strict';
var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var salesforce = require('../../config-sf');
var visual = require('node-visualforce-module');

gulp.task('deploy-dev',["pkg"], function() {
  var deploy = visual.deploy(salesforce.deploy.development);
  deploy.execute();
});

gulp.task('deploy-sand',["pkg"], function() {
  var deploy = visual.deploy(salesforce.deploy.sandbox);
  deploy.execute();
});
