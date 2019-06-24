"use strict";

// incluimos los modulos necesarios para usar la aplicacion
const fs = require('fs');

const path = require('path');

const fsPromises = fs.promises;

const validatePathAbsolute = route => {
  if (path.isAbsolute(route)) {
    return route;
  } else {
    return path.resolve(route);
  }
};

const checkRouteIsFile = route => {
  return fsPromises.stat(route) //retorna promesa con el objeto 
  .then(res => res.isFile()); //retorna el booleano con el valor 
};

const readDirectory = route => {
  return fsPromises.readdir(route);
};

const getPathsOfRoute = route => {
  var allRoutes, checkRoute, readDirector, promises, arr, newArr;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        allRoutes = [];
        _context.next = 3;
        return regeneratorRuntime.awrap(checkRouteIsFile(route));

      case 3:
        checkRoute = _context.sent;

        if (!checkRoute) {
          _context.next = 8;
          break;
        }

        allRoutes.push(route);
        _context.next = 17;
        break;

      case 8:
        _context.next = 10;
        return regeneratorRuntime.awrap(readDirectory(route));

      case 10:
        readDirector = _context.sent;
        promises = readDirector.map(paths => {
          let file = path.join(route, paths);
          return getPathsOfRoute(file);
        });
        _context.next = 14;
        return regeneratorRuntime.awrap(Promise.all(promises));

      case 14:
        arr = _context.sent;
        newArr = Array.prototype.concat(...arr);
        return _context.abrupt("return", newArr);

      case 17:
        return _context.abrupt("return", allRoutes);

      case 18:
      case "end":
        return _context.stop();
    }
  });
};

module.exports = {
  validatePathAbsolute,
  checkRouteIsFile,
  getPathsOfRoute,
  readDirectory
};