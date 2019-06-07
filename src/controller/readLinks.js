/*const fs = require('fs');
const path = require('path');

*/
import fs from 'fs'
import path from 'path'
const fsPromises = fs.promises;

//const links = require('./links')


import {getPathsOfRoute,readDirectory} from  './links.js'


const readFile = (route) => {
    return fsPromises.readFile(route,'utf8')
}

getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src').then(res=>console.log(res))

readDirectory('/home/leslie/Documents/LIM009-fe-md-links/src').then(res=>console.log(res))

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