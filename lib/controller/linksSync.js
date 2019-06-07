"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathsOfRoute = exports.checkRouteIsDirectory = exports.checkRouteIsFile = void 0;

var fs = require('fs');

var path = require('path');
/*
import fs from 'fs'         
import path from 'path' */


var checkRouteIsFile = function checkRouteIsFile(route) {
  return fs.statSync(route).isFile();
};

exports.checkRouteIsFile = checkRouteIsFile;

var checkRouteIsDirectory = function checkRouteIsDirectory(route) {
  return fs.statSync(route).isDirectory();
};
/*
//console.log(checkRouteIsFile('/home/leslie/Documents/LIM009-fe-md-links/src/md-links/index.js'))
//console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
*/


exports.checkRouteIsDirectory = checkRouteIsDirectory;

var getPathsOfRoute = function getPathsOfRoute(route) {
  var allRoutes = [];

  if (checkRouteIsFile(route)) {
    allRoutes.push(route);
  } else {
    fs.readdirSync(route).forEach(function (paths) {
      var file = path.join(route, paths);
      allRoutes = allRoutes.concat(getPathsOfRoute(file));
    });
  } // solo links .md


  var filesMd = allRoutes.filter(function (file) {
    return path.extname(file) === '.md';
  });
  return filesMd;
}; //console.log(getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/node_modules'))
//console.log(getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/prueba"))


exports.getPathsOfRoute = getPathsOfRoute;

var getLinksMd = function getLinksMd(route) {
  var linksFilesMd = [];
  var regExpGeneral = /normalmente/g;
  route.forEach(function (path) {
    var fileContent = fs.readFileSync(path, 'utf8');
    var linksFile = fileContent.match(regExpGeneral); // console.log(linksFile)
  });
};

var ruta = getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md");
getLinksMd(ruta);