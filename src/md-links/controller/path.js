const path = require('path')

export const validatePathAbsolute = (route) =>{
    if(path.isAbsolute(route)){
      return route
    }else{
      return path.resolve(route)
    }
}
/*
PRUEBAS :
LINUX
console.log(validatePathAbsolute('/home/leslie/Documents/LIM009-fe-md-links/src/index.js'))
console.log(validatePathAbsolute('./index.js'))
 WINDOWS 
console.log(validatePathAbsolute("E:/LABORATORIA/LIM009-fe-md-links/src/index.js"))
console.log(validatePathAbsolute("./index.js"))*/

