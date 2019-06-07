"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathsOfRoute = exports.readDirectory = exports.checkRouteIsFile = void 0;

const fs = require('fs');

const path = require('path');
/*import fs from 'fs'
import path from 'path'*/


const fsPromises = fs.promises;

const checkRouteIsFile = route => {
  return fsPromises.stat(route).then(res => res.isFile());
};

exports.checkRouteIsFile = checkRouteIsFile;

const readDirectory = route => {
  return fsPromises.readdir(route);
};

exports.readDirectory = readDirectory;

const getPathsOfRoute = route => {
  var allRoutes, checkRoute, readDirector;
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
        _context.next = 12;
        break;

      case 8:
        _context.next = 10;
        return regeneratorRuntime.awrap(readDirectory(route));

      case 10:
        readDirector = _context.sent;
        readDirector.forEach(paths => {
          let file = path.join(route, paths);
          allRoutes = allRoutes.concat(getPathsOfRoute(file));
        });

      case 12:
        return _context.abrupt("return", Promise.all(allRoutes).then(routes => Array.prototype.concat(...routes)).then(files => files.filter(file => path.extname(file) === '.md')));

      case 13:
      case "end":
        return _context.stop();
    }
  });
};
/*
module.exports = {
  getPathsOfRoute,
  readDirectory,
  checkRouteIsFile
}*/


exports.getPathsOfRoute = getPathsOfRoute;