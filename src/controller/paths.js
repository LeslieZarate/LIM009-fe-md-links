// incluimos los modulos necesarios para usar la aplicacion
const fs = require('fs');
const path = require('path')
const fsPromises = fs.promises;

const validatePathAbsolute = (route) =>{
  if(path.isAbsolute(route)){
    return route
  }else{
    return path.resolve(route)
  }
}

const checkRouteIsFile = (route) => {
  return fsPromises.stat(route)       //retorna promesa con el objeto 
    .then(res => res.isFile())        //retorna el booleano con el valor 
}

const readDirectory = (route) => {  
  return fsPromises.readdir(route)
}

const getPathsOfRoute = async (route) => {
  let allRoutes = [];
  const checkRoute = await checkRouteIsFile(route);
  if (checkRoute) {
    allRoutes.push(route);
  }
  else {
    const readDirector = await readDirectory(route)
    const promises = readDirector.map(paths => {
      let file = path.join(route, paths)
      return getPathsOfRoute(file)
    });

    const arr = await Promise.all(promises)
    const newArr = Array.prototype.concat(...arr);
    return newArr
  }

  return allRoutes
}

//getPathsOfRoute('E:/LABORATORIA/LIM009-fe-md-links/README.md').then(res=>console.log(res))
///getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src').then(res=>console.log(res))

module.exports = {
  validatePathAbsolute,
  checkRouteIsFile,
  getPathsOfRoute,
  readDirectory
}




















/*
const getPathsOfRoute = async (route) => {
  let allRoutes = [];
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
      //console.log('tot'); console.log(tot)
      const arr = await Promise.all(tot)  /// Resolver las promesas de las sub-carpetas
      //console.log('arr');console.log(arr)
      const newArr = Array.prototype.concat(...arr); // concatenamos totalas promesas
     // console.log('newArr');console.log(newArr)
      return newArr
    }
    const total = await Promise.all(allRoutes); // Resuelve la promesas del array ALLROUTES
    //console.log('total');  console.log(total);
    return total
}*/