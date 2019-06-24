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

module.exports = {
  validatePathAbsolute,
  checkRouteIsFile,
  getPathsOfRoute,
  readDirectory
}
















