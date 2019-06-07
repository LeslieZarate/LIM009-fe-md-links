/*import fs from 'fs'
import path from 'path'*/


const fs = require('fs');
const path = require('path')
const fsPromises = fs.promises;

const checkRouteIsFile = (route) =>{
  return fsPromises.stat(route).then(res=> res.isFile())
}

const readDirectory = (route) => {
  return fsPromises.readdir(route)
}

const getPathsOfRoute = async (route)=> {
  let allRoutes = [];
  const checkRoute = await checkRouteIsFile(route);  
  if(checkRoute){  
    allRoutes.push(route); 
  }  
  else{    
    const readDirector  = await readDirectory(route)    
    readDirector.forEach(paths=> {       
      let file = path.join(route, paths)
      allRoutes = allRoutes.concat(getPathsOfRoute(file))
    });      
  }  
  return Promise.all(allRoutes)
        .then(routes =>Array.prototype.concat(...routes))
        .then(files => files.filter((file => path.extname(file) === '.md')))
}

getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/prueba').then(res=>console.log(res))


/*
module.exports = {
  getPathsOfRoute,
  readDirectory,
  checkRouteIsFile
}*/