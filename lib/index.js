"use strict";

var _path = require("./controller/path.js");

require("./controller/links.js");

const mdlinks = route => {
  const routeValidate = (0, _path.validatePathAbsolute)(route); // const routeArr =  getPathsOfRoute(routeValidate)

  return routeValidate;
};

console.log(mdlinks('E:/LABORATORIA/LIM009-fe-md-links/prueba'));