"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _links = require("./links.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const fs = require('fs');
//const path = require('path')
var fsPromises = _fs["default"].promises;

var readFile = function readFile(route) {
  return fsPromises.readFile(route, 'utf8');
};

(0, _links.getPathsOfRoute)("E:/LABORATORIA/LIM009-fe-md-links/prueba").then(function (res) {
  return console.log(res);
}); //getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src/index.js').then(res=>console.log(res))

/*
const getLinksMd = (route) => {
  let linksFilesMd = [];
  const regExpGeneral = /normalmente/g;
  route.forEach(path=>{
    let fileContent =fs.readFileSync(path,'utf8')
    let linksFile = fileContent.match(regExpGeneral)
   // console.log(linksFile)
    
  })
}

const ruta = getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md")
getLinksMd(ruta)


  */