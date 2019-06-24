"use strict";

const fnRoutes = require('./controller/paths');

const fnLinks = require('./controller/links');

const validateLinks = require('./controller/validate');

const mdLinks = (route, options) => {
  var routeValidate, routesArr, routesMd, linksRoute;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        routeValidate = fnRoutes.validatePathAbsolute(route);
        _context.next = 3;
        return regeneratorRuntime.awrap(fnRoutes.getPathsOfRoute(routeValidate));

      case 3:
        routesArr = _context.sent;
        routesMd = fnLinks.filesMd(routesArr);
        _context.next = 7;
        return regeneratorRuntime.awrap(fnLinks.getLinksMd(routesMd));

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
      case "end":
        return _context.stop();
    }
  });
};

module.exports = mdLinks;