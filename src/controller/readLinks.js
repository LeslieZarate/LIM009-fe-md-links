const fs = require('fs');
const path  = require('path')
const fsPromises = fs.promises;
const myMarked = require('marked');

const readFile = (route) => {
  return fsPromises.readFile(route,'utf8')
}

const filesMd = (routes) =>{
  const routesMd = routes.filter(route => path.extname(route)===".md");
  return routesMd
}

const getLinksMd = async (routes) => {
  let linksFilesMd = [];
  const routesMd = filesMd(routes)
  for(let i=0; i<routesMd.length; i++) {
    let fileContent = await readFile(routes[i]) 
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => linksFilesMd.push({href: href, text:text , file : routesMd[i]})  
    myMarked(fileContent, { renderer: renderer });
  };
  return linksFilesMd
}

module.exports = {
  readFile,
  getLinksMd
}






/*

const getLinksMd = async (routes) => {
    const routesMd = filesMd(routes)
    const linksFilesMd = routesMd.map( async(paths)=>{
    let linksMd = [];
    let fileContent = await readFile(paths) 
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {   
      linksMd.push({href: href, text:text , file : paths})
    }
    myMarked(fileContent, { renderer: renderer });
    return linksMd
  })

  const arr = await Promise.all(linksFilesMd);
  const result = Array.prototype.concat(...arr);
  return result   
}

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
   
 
  const promises =routes.map(pro);
  const result = Promise.all(promises).then(links =>Array.prototype.concat(...links))

  return result
}


*/















