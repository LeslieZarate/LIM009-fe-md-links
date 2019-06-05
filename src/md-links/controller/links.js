const fs = require('fs');
const path = require('path')

export const checkRouteIsFile = (route)  =>{
  return fs.statSync(route, (err,data)=>{
    if(err)

  }).isFile()
}
,res=>conso

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

/*
const getPathsOfDirectory = (route)=>{
  let routesDirectory = []; 
  if(fs.statSync(route).isFile()){    
    routesDirectory.push(route)
  }  
  else{
    fs.readdirSync(route).forEach(paths =>{     
      let file = path.join(route, paths);
      routesDirectory = routesDirectory.concat(getPathsOfDirectory(file))
    });
  } 
  return routesDirectory
}
*/


const getPathsOfDirectory = (route)=>{  
  let routesDirectory = [];
  fs.readdirSync(route).forEach(paths =>{     
    const file = path.join(route, paths);
    if(fs.statSync(file).isFile()){
      routesDirectory.push(file)
    }else{
      routesDirectory = routesDirectory.concat(getPathsOfDirectory(file))    
    }    
  })

  return routesDirectory
}



console.log(getPathsOfDirectory ('/home/leslie/Documents/LIM009-fe-md-links/'))




