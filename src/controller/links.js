// incluimos los modulos necesarios para usar la aplicacion 

const fs = require('fs');
const path = require('path')
const fsPromises = fs.promises; 

const checkRouteIsFile = (route) =>{
  return fsPromises.stat(route)     //retorna promesa con el objeto 
  .then(res=> res.isFile())        //retorna el booleano con el valor 
}

const readDirectory = (route) => {
  return fsPromises.readdir(route)
}

const getPathsOfRoute = async (route) => {
  let allRoutes = [];
  console.log(allRoutes)
  const checkRoute = await checkRouteIsFile(route);   // cuando se resulve la promesa mostrara true o false segun sea el caso
    if(checkRoute){       
      const promise = new Promise((resolve)=>{
        resolve(route)
      })
      allRoutes.push(promise)      
    }
    else{
      const readDirector = await readDirectory(route)
      const tot = readDirector.map(paths=> {       
      let file = path.join(route, paths)
      return getPathsOfRoute(file)
      });   
      const arr = await Promise.all(tot)
      const newArr = Array.prototype.concat(...arr);
      return newArr
    }    
    const total = await Promise.all(allRoutes);    
    return total  
}

getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src').then(res=>console.log(res))


/*
const promise = new Promise(async (resolve)=>{
  const checkRoute = await checkRouteIsFile(route);   // cuando se resulve la promesa mostrara true o false segun sea el caso
  let allRoutes = [];
  if(checkRoute){             
      allRoutes.push(route)
      resolve(allRoutes)
    }
    else{
    const readDirector  = await readDirectory(route)
    let readDir = readDirector.map(paths=> {       
      let file = path.join(route, paths)
      return getPathsOfRoute(file)
    });
    const result = await Promise.all(readDir);
         
    resolve(result)
  
  }
});

return  promise */






module.exports = {
  checkRouteIsFile,
  getPathsOfRoute,
  readDirectory
}