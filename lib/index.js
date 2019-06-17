"use strict";

const fnRoutes = require('./controller/paths');

const fnLinks = require('./controller/links');

const validateLinks = require('./controller/validate');

const mdLinks = (route, options) => {
  var routeValidate, routeArr, linksRoute;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        routeValidate = fnRoutes.validatePathAbsolute(route);
        _context.next = 4;
        return regeneratorRuntime.awrap(fnRoutes.getPathsOfRoute(routeValidate));

      case 4:
        routeArr = _context.sent;
        _context.next = 7;
        return regeneratorRuntime.awrap(fnLinks.getLinksMd(routeArr));

      case 7:
        linksRoute = _context.sent;

        if (!options.validate) {
          _context.next = 12;
          break;
        }

        return _context.abrupt("return", validateLinks(linksRoute));

      case 12:
        return _context.abrupt("return", linksRoute);

      case 13:
        _context.next = 19;
        break;

      case 15:
        _context.prev = 15;
        _context.t0 = _context["catch"](0);
        _context.t0 = `ENOENT: no such file or directory,${route}`;
        return _context.abrupt("return", _context.t0);

      case 19:
      case "end":
        return _context.stop();
    }
  }, null, null, [[0, 15]]);
};
/*
mdLinks('E:/LABORATORIA/LIM009-fe-md-links/prueba', { validate: true})
	.then(res => console.log(res))
	.catch(err => console.log(err))*/


module.exports = mdLinks;