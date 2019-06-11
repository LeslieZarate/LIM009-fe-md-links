/*import fs from 'fs'
import path from 'path'*/

const fs = require('fs');
const path = require('path')
const fsPromises = fs.promises;

const checkRouteIsFile = (route) =>{
  return fsPromises.stat(route) // retorna promesa con el objeto 
  .then(res=> res.isFile())   // retorna el booleano con el valor 
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

 // return allRoutes  
  const promises = await Promise.all(allRoutes)
  const resultRoutes  =  Array.prototype.concat(...promises)
  const resultMd =  resultRoutes.filter((file => path.extname(file) === '.md'))

  return resultMd
}

getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/prueba').then(res=>console.log(res))

module.exports = {
  checkRouteIsFile,
  getPathsOfRoute,
  readDirectory
}