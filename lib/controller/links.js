"use strict";

const fs = require('fs');

const path = require('path');

const fsPromises = fs.promises;

const myMarked = require('marked');

const readFile = route => {
  return fsPromises.readFile(route, 'utf8');
};

const filesMd = routes => {
  const routesMd = routes.filter(route => path.extname(route) === ".md");
  return routesMd;
};

const getLinksMd = routes => {
  var routesMd, linksFilesMd, arr, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        routesMd = filesMd(routes);
        linksFilesMd = routesMd.map(paths => {
          var linksMd, fileContent, renderer;
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                linksMd = [];
                _context.next = 3;
                return regeneratorRuntime.awrap(readFile(paths));

              case 3:
                fileContent = _context.sent;
                renderer = new myMarked.Renderer();

                renderer.link = (href, title, text) => {
                  return linksMd.push({
                    href: href,
                    text: text,
                    file: paths
                  });
                };

                console.log(myMarked(fileContent, {
                  renderer: renderer
                }));
                return _context.abrupt("return", linksMd);

              case 8:
              case "end":
                return _context.stop();
            }
          });
        });
        _context2.next = 4;
        return regeneratorRuntime.awrap(Promise.all(linksFilesMd));

      case 4:
        arr = _context2.sent;
        result = Array.prototype.concat(...arr);
        return _context2.abrupt("return", result);

      case 7:
      case "end":
        return _context2.stop();
    }
  });
};

module.exports = {
  readFile,
  filesMd,
  getLinksMd
};
getLinksMd([path.resolve('./prueba/file.md')]).then(res => console.log(res));
/*
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