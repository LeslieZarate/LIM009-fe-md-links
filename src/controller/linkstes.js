const fs = require('fs');
const path = require('path')
//import fs from 'fs'
//import path from 'path'
const fsPromises = fs.promises;


const checkRouteIsFile = (route) =>{
  return fsPromises.stat(route).then(res=> res.isFile())
}

const readFile = (route) => {
  return fsPromises.readFile(route,'utf8')
}

const readDirectory = (route) => {
  return fsPromises.readdir(route)

}


async function getPathsOfRoute(route){
  let allRoutes = [];
  const checkRoute = await checkRouteIsFile(route);  
  if(checkRoute){    
    allRoutes.push(route)
  }  
  else{
  const readDirector  = await readDirectory(route)
  readDirector.forEach(paths=> {
      let file = path.join(route, paths);
      const getpath = getPathsOfRoute(file)
      allRoutes =allRoutes.concat(getpath)
    });
  }

return allRoutes
}




getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src/index.js').then(res=>console.log(res))





































/*
const getPathsOfRoute = (route)=>{
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


//console.log(getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/node_modules'))


/*
const getLinksMd = (route) => {
  let linksFilesMd = [];
  route.forEach(path=>{
    let readFile =fs.readFileSync(path,'utf8')
    console.log(readFile)
  })

}
const ruta = getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md")
getLinksMd(ruta)
*/