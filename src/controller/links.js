const fs = require('fs');
const path = require('path');
/*
import fs from 'fs'         
import path from 'path' */

 const checkRouteIsFile = (route)  =>{
  return fs.statSync(route).isFile()
}
/*
export const checkRouteIsDirectory = (route)  =>{
  return fs.statSync(route).isDirectory()
}

//console.log(checkRouteIsFile('/home/leslie/Documents/LIM009-fe-md-links/src/md-links/index.js'))
//console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
*/
 const getPathsOfRoute = (route)=>{
  let allRoutes = []; 
  if(checkRouteIsFile(route)){    
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
//console.log(getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/prueba"))


const getLinksMd = (route) => {
  let linksFilesMd = [];
  const regExpGeneral = /normalmente/g;
  route.forEach(path=>{
    let fileContent =fs.readFileSync(path,'utf8')
    console.log(fileContent.match(regExpGeneral))
    
  })
}

const ruta = getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md")
getLinksMd(ruta)

