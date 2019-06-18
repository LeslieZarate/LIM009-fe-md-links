const fs = require('fs');
const path = require('path')
const fsPromises = fs.promises;
const myMarked = require('marked');

const readFile = (route) => {
  return fsPromises.readFile(route, 'utf8')
}

const filesMd = (routes) => {
  const routesMd = routes.filter(route => path.extname(route) === ".md");
  return routesMd
}

const getLinksMd = async (routes) => {
  const linksFilesMd = routes.map(async (paths) => {
    let linksMd = [];
    let fileContent = await readFile(paths)
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      linksMd.push({ href: href, text: text, file: paths })
    }
    myMarked(fileContent, { renderer: renderer });
    return linksMd
  });
  const arr = await Promise.all(linksFilesMd);
  const result = Array.prototype.concat(...arr);
  return result
}

module.exports = {
  readFile,
  filesMd,
  getLinksMd
}