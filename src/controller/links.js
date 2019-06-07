/*import fs from 'fs'
import path from 'path'*/



const fs = require('fs');
const path = require('path')
const fsPromises = fs.promises;

export const checkRouteIsFile = (route) =>{
  return fsPromises.stat(route).then(res=> res.isFile())
}

export const readDirectory = (route) => {
  return fsPromises.readdir(route)
}

export const getPathsOfRoute = async (route)=> {
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


































//getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/prueba").then(res=>console.log(res))
//getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src/index.js').then(res=>console.log(res))


/*

 async function getPathsOfRoute(route){
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
//return allRoutes
  return Promise.all(allRoutes).then(res =>Array.prototype.concat(...res))
}
*/
/*
const miFuncion = new Promise((resolve,reject)=>{})
miFuncion.then((res) => console.log(res))
.catch((err) => console.log(err))
async function miFuncionAsincrona(a, b) {
  arr = []
  const leerFuncion = await miFuncion();
  const nuevoPaso = await leerFuncion.concat(=>)
  const suma = await nuevoPaso.split
}
*/
