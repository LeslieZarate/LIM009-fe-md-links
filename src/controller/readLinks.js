const fs = require('fs');
const fsPromises = fs.promises;
const myMarked = require('marked');
const fnLink = require('./links')

const readFile = (route) => {
  return fsPromises.readFile(route,'utf8')
}

const getLinksMd = async (routes) => {
  let linksFilesMd = [];
  for(let i=0; i<routes.length; i++) {
    let fileContent = await readFile(routes[i]) 
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => linksFilesMd.push({href: href, text:text , file : routes[i]})  
    myMarked(fileContent, { renderer: renderer });
  };
  return linksFilesMd
}

/*
const getLinksMd = (routes) => {
  const prom = (paths) => new Promise ((resolve)=>{
    readFile(paths)
    .then(fileContent =>{  
      let linksFilesMd = [];
      const renderer = new myMarked.Renderer();      
      renderer.link = (href, title, text) => {  
      linksFilesMd.push({href: href, text:text , file : paths}) 
      }    
      myMarked(fileContent, { renderer: renderer });
      resolve(linksFilesMd)
    })
  });
   
 
  const promises =routes.map(prom);
  const result = Promise.all(promises).then(links =>Array.prototype.concat(...links))

  return result
}*/

/*
fnLink.getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md")
.then(res=>{  
  console.log(res)
  getLinksMd(res).then(res=>console.log(res))
})
*/


module.exports = {
  readFile,
  getLinksMd
}







/*
const getLinksMd = async (routes) => {
  const linksFilesMd = console.log(routes.map( async(paths)=>{
    let fileContent = await readFile(paths) 
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {   
      return {href: href, text:text , file : paths}
    }
    myMarked(fileContent, { renderer: renderer });
  }))
  console.log((await linksFilesMd))
  //return Promise.all(await linksFilesMd);  
}
*/








