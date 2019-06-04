const path = require('path')

const validatePath = (Path) =>{
  if(path.isAbsolute(Path)){
        return Path
    }else{
        return path.resolve(Path)
    }
  // return  path.isAbsolute(ruta)
}

console.log(validatePath('/home/leslie/Documents/LIM009-fe-md-links/src/index.js'))
console.log(validatePath('./index.js'))