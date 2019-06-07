"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathsOfRoute = exports.checkRouteIsDirectory = exports.checkRouteIsFile = void 0;

const fs = require('fs');

const path = require('path');
/*
import fs from 'fs'         
import path from 'path' */


const checkRouteIsFile = route => {
  return fs.statSync(route).isFile();
};

exports.checkRouteIsFile = checkRouteIsFile;

const checkRouteIsDirectory = route => {
  return fs.statSync(route).isDirectory();
};
/*
//console.log(checkRouteIsFile('/home/leslie/Documents/LIM009-fe-md-links/src/md-links/index.js'))
//console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
*/


exports.checkRouteIsDirectory = checkRouteIsDirectory;

const getPathsOfRoute = route => {
  let allRoutes = [];

  if (checkRouteIsFile(route)) {
    allRoutes.push(route);
  } else {
    fs.readdirSync(route).forEach(paths => {
      let file = path.join(route, paths);
      allRoutes = allRoutes.concat(getPathsOfRoute(file));
    });
  } // solo links .md


  const filesMd = allRoutes.filter(file => path.extname(file) === '.md');
  return filesMd;
}; //console.log(getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/node_modules'))
//console.log(getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/prueba"))


exports.getPathsOfRoute = getPathsOfRoute;

const getLinksMd = route => {
  let linksFilesMd = [];
  const regExpGeneral = /normalmente/g;
  route.forEach(path => {
    let fileContent = fs.readFileSync(path, 'utf8');
    let linksFile = fileContent.match(regExpGeneral); // console.log(linksFile)
  });
};

const ruta = getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md");
getLinksMd(ruta);