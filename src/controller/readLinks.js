const fs = require('fs');
const fsPromises = fs.promises;

const path = require('path');
/*
import fs from 'fs'
import path from 'path'*/


import { readDirectory}  from "./links.js"


const readFile = (route) => {
    return fsPromises.readFile(route,'utf8')
}


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