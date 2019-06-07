"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathsOfRoute = exports.readDirectory = exports.checkRouteIsFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//const fs = require('fs');
//const path = require('path')
var fsPromises = _fs["default"].promises;

var checkRouteIsFile = function checkRouteIsFile(route) {
  return fsPromises.stat(route).then(function (res) {
    return res.isFile();
  });
};

exports.checkRouteIsFile = checkRouteIsFile;

var readDirectory = function readDirectory(route) {
  return fsPromises.readdir(route);
};

exports.readDirectory = readDirectory;

var getPathsOfRoute =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(route) {
    var allRoutes, checkRoute, readDirector;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            allRoutes = [];
            _context.next = 3;
            return checkRouteIsFile(route);

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
            return readDirectory(route);

          case 10:
            readDirector = _context.sent;
            readDirector.forEach(function (paths) {
              var file = _path["default"].join(route, paths);

              allRoutes = allRoutes.concat(getPathsOfRoute(file));
            });

          case 12:
            return _context.abrupt("return", Promise.all(allRoutes).then(function (routes) {
              var _Array$prototype;

              return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(routes));
            }).then(function (files) {
              return files.filter(function (file) {
                return _path["default"].extname(file) === '.md';
              });
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPathsOfRoute(_x) {
    return _ref.apply(this, arguments);
  };
}(); //getPathsOfRoute("E:/LABORATORIA/LIM009-fe-md-links/prueba").then(res=>console.log(res))
//getPathsOfRoute('/home/leslie/Documents/LIM009-fe-md-links/src/index.js').then(res=>console.log(res))

/*

 async function getPathsOfRoute(route){
  let allRoutes = [];
  const checkRoute = await checkRouteIsFile(route);  
  if(checkRoute){  
    allRoutes.push(route); 
  }  
  else{    
    const readDirector  = await readDirectory(route)    
    readDirector.forEach(paths=> {       
      let file = path.join(route, paths)
      allRoutes = allRoutes.concat(getPathsOfRoute(file))
    });      
  }  
//return allRoutes
  return Promise.all(allRoutes).then(res =>Array.prototype.concat(...res))
}
*/

/*
const miFuncion = new Promise((resolve,reject)=>{})
miFuncion.then((res) => console.log(res))
.catch((err) => console.log(err))
async function miFuncionAsincrona(a, b) {
  arr = []
  const leerFuncion = await miFuncion();
  const nuevoPaso = await leerFuncion.concat(=>)
  const suma = await nuevoPaso.split
}
*/


exports.getPathsOfRoute = getPathsOfRoute;