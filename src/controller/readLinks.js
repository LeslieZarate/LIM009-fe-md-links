/*import fs from 'fs'
import path from 'path'*/

const fs = require('fs');
const fsPromises = fs.promises;
const myMarked = require('marked');

//const fnLink = require('./links')

const readFile = (route) => {
  return fsPromises.readFile(route,'utf8')
}


const getLinksMd = async (routes) => {
  let linksFilesMd = [];
  for(let i=0; i<routes.length; i++) {
    let fileContent = await readFile(routes[i]) 
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {   
    return  linksFilesMd.push({href: href, text:text , file : routes[i]})    
    }
    myMarked(fileContent, { renderer: renderer });
  };
  return linksFilesMd
}


/*
const getLinksMd = async (routes) => {
    const promises = await Promise.all(routes.map(async paths =>{
    let fileContent = await readFile(paths)
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {   
    return {href: href, text:text , file : paths}
    }
    myMarked(fileContent, { renderer: renderer });
  }))
  const results = await Promise.all(promises)
 
  return promises
}


fnLink.getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/README.md")
.then(res=>{  
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