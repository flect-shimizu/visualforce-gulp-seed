'use strict';

var setting = require("./setup.js");

var resourcePath = '../staticresources/' + setting.sf.resourceName;
var inputPath = setting.sf.sfbuild + "/inputPath/";
var outputPath =  setting.sf.sfbuild + "/outputPath/";
var retrievePath =  setting.sf.sfbuild + "/retrieve/";

module.exports = {
  build: {
    buildbase:setting.build,
    srcbase:setting.src,
    resourceName:setting.sf.resourceName,
    staticresources: [
      setting.build + "/css/*.css",
      setting.build + "/js/*.js",
      setting.build + "/img/*.*"],
    pages: ["src/pages/*.*"],
    links: {
      css: [resourcePath + '/css/vendor.css', resourcePath + '/css/app.css'],
      js: [resourcePath + '/js/vendor.js', resourcePath + '/js/app.js'],
    },
    pkg: {
      inputPath: inputPath,
      outputPath: outputPath,
      staticResourceFolder: 'staticresources/',
    },
  },
  deploy: {
    development: {
      user: setting.sf.development.user,
      pass: setting.sf.development.pass,
      token: setting.sf.development.token,
      apiVersion: setting.sf.development.apiVersion,
      // Target-specific file lists and/or options go here.
      pkg: {
        staticresource: [setting.sf.resourceName],
        pages: ['*']
      },
      outputPath: outputPath,
    },
    sandbox: {
      user: setting.sf.sandbox.user,
      pass: setting.sf.sandbox.pass,
      token: setting.sf.sandbox.token,
      apiVersion: setting.sf.sandbox.apiVersion,
      // Target-specific file lists and/or options go here.
      pkg: {
        staticresource: [setting.sf.resourceName],
        pages: ['*']
      },
      outputPath: outputPath,
    }
  },
  retrieve: {
    user: setting.sf.retrieve.user,
    pass: setting.sf.retrieve.pass,
    token: setting.sf.retrieve.token,
    apiVersion: setting.sf.retrieve.apiVersion,
    //Target-specific file lists and/or options go here.
    pkg: { //Package to deploy
      staticresource: ['*'],
      pages: ['*']
    },
    inputPath: retrievePath,
    outputPath: retrievePath,
  },
  apexPageOption: setting.sf.apexPageOption
}