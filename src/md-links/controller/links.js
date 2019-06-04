const fs = require('fs');

export const checkRouteIsFile = (route)  =>{
  return fs.statSync(route).isFile()
}

export const checkRouteIsDirectory = (route)  =>{
  return fs.statSync(route).isDirectory()
}





/*
LINUX
console.log(checkRouteIsFile('/home/leslie/Documents/LIM009-fe-md-links/src/md-links/index.js'))

WINDOW
console.log(checkRouteIsFile("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
console.log(checkRouteIsFile("E:/LABORATORIA/LIM009-fe-md-links/src/md-links"))

console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/index.js"))
console.log(checkRouteIsDirectory("E:/LABORATORIA/LIM009-fe-md-links/src/md-links/"))*/
