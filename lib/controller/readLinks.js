"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _links = require("./links.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const fs = require('fs');
const path = require('path');

*/
const fsPromises = _fs.default.promises; //const links = require('./links')

const readFile = route => {
  return fsPromises.readFile(route, 'utf8');
};

(0, _links.getPathsOfRoute)('/home/leslie/Documents/LIM009-fe-md-links/src').then(res => console.log(res));
(0, _links.readDirectory)('/home/leslie/Documents/LIM009-fe-md-links/src').then(res => console.log(res));
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