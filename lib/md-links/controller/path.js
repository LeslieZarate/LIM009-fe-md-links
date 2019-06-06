"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const path = require('path')
const validatePathAbsolute = route => {
  if (_path.default.isAbsolute(route)) {
    return route;
  } else {
    return _path.default.resolve(route);
  }
};
/*
PRUEBAS :
LINUX
console.log(validatePathAbsolute('/home/leslie/Documents/LIM009-fe-md-links/src/index.js'))
console.log(validatePathAbsolute('./index.js'))
 WINDOWS 
console.log(validatePathAbsolute("E:/LABORATORIA/LIM009-fe-md-links/src/index.js"))
console.log(validatePathAbsolute("./index.js"))*/


exports.validatePathAbsolute = validatePathAbsolute;