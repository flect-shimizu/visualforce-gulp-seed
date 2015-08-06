'use strict';

var setting = require("./setup.js")

module.exports = {
  clean: [setting.build, setting.tmp],
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: [setting.build, setting.tmp],
      middleware: [
        function (req, res, next) {
          // /pages/へのリクエストは.htmlを付加する
          if (req.url.match(/\/pages\//) && !req.url.match(/(.+?).html/) ) req.url = req.url + ".html";
          next();
        }]
    },
    startPath: "/pages/topPage"
  },
  bower: {
    dist: {
      js: setting.build + '/js',
      css: setting.build + '/css'
    }
  },
  sass: {
    src: setting.src + "/sass/**/*.{sass,scss}",
    dest: setting.tmp + "/css",
    settings: {
      //      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'img' // Used by the image-url helper
    }
  },
  images: {
    src: setting.src + "/img/**",
    dest: setting.build + "/img"
  },
  markup: {
    src: setting.src + "/pages/**",
    links: {
      css: ['../css/vendor.css', '../css/app.css'],
      js: ['../js/vendor.js', '../js/mock.js', '../js/app.js'],
    },
    dest: setting.build + "/pages"
  },
  css: {
    src: setting.css.src,
    dest: setting.build + "/css",
    filename: "app.css"
  },
  script: {
    src:setting.script.src,
    mock: [
      setting.src + '/js/mock.js',
    ],
    dest: setting.build + '/js',
    filename: 'app.js'
  }
};