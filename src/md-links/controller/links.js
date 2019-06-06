//const fs = require('fs');
//const path = require('path')

import fs from 'fs'
import path from 'path'

const fsPromises = fs.promises;

/*
export const checkRouteIsFile = (route)  =>{
  return fs.statSync(route).isFile()
}
export const checkRouteIsDirectory = (route)  =>{
  return fs.statSync(route).isDirectory()
}

LINUX
console.log(checkRouteIsFile('/home/leslie/Documents/LIM009-fe-md-links/src/md-links/index.js'))
WINDOW
console.log(checkRouteIsFile("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
console.log(checkRouteIsFile("E:/LABORATORIA/LIM009-fe-md-links/src/md-links"))
console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/"))*/



const checkRouteIsFile = (route)  =>{
  return fsPromises.stat(route)
  .then(res => console.log(res.isDirectory()))
}

//checkRouteIsFile('/home/leslie/Documents/LIM009-fe-md-links/src/md-links/index.js')



const getPathsOfRoute = (route,)=>{
  let allRoutes = []; 
  if(fs.statSync(route).isFile()){    
    allRoutes.push(route)
  }  
  else{
    fs.readdirSync(route).forEach(paths =>{     
      let file = path.join(route, paths);
      allRoutes =allRoutes.concat(getPathsOfRoute(file))
    });
  } 
  // solo links .md
  const filesMd = allRoutes.filter((file => path.extname(file) === '.md')) 
  return filesMd;
}

//console.log(getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/node_modules'))



const getLinksMd = (route) => {
  let linksFilesMd = [];
  route.forEach(path=>{
    let readFile =fs.readFileSync(path,'utf8')
    console.log(readFile)
  })

}
/*
const ruta = getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md")
getLinksMd(ruta)*/


/*
const getPathsOfDirectory = (route)=>{  
  let routesDirectory = [];
  fs.readdirSync(route).forEach(paths =>{     
    const file = path.join(route, paths);
    if(fs.statSync(file).isFile()){
      routesDirectory.push(file)
    }else{
      routesDirectory = routesDirectory.concat(getPathsOfDirectory(file))    
    }    
  })
  return routesDirectory
}*/