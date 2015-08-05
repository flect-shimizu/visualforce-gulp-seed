'use strict';

var config = require('../../config-sf').apexPageOption;
var through2 = require('through2');
var util = require('util');
var path = require('path');

module.exports = function () {

  var func = function (file, enc, cb) {
    var filePath = path.parse(file.path)
    var option = (config[filePath.name]) ? config[filePath.name]:config["default"];
    merge(option,config["default"]);
    
    // 指定されたオプションを文字列化
    var optionStr = "";
    for (var key in option) {
      optionStr += key + "='" + option[key] + "' ";
    }
    
    file.contents =
      new Buffer(String(file.contents).replace(/<apex:page (.+?)>/, "<apex:page " + optionStr + ">"));
    this.push(file);
    cb();
  }

  var merge = function (obj1, obj2) {
    if (!obj2) {
      obj2 = {};
    }
    for (var attrname in obj2) {
      if (obj2.hasOwnProperty(attrname) && !obj1.hasOwnProperty(attrname)) {
        obj1[attrname] = obj2[attrname];
      }
    }
  };
  return through2.obj(func);
}