"use strict";

const fetch = require("node-fetch");

const validateLinks = arraylinks => {
  const arrValidate = arraylinks.map(link => {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(link.href));

        case 3:
          response = _context.sent;
          link.status = response.status; // estado de respuesta http(n°)

          if (link.status >= 200 && link.status < 400) {
            link.statusText = 'OK'; // ok /fail
          } else {
            link.statusText = 'FAIL';
          }

          return _context.abrupt("return", link);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          link.status = _context.t0.message;
          link.statusText = 'FAIL';
          return _context.abrupt("return", link);

        case 14:
        case "end":
          return _context.stop();
      }
    }, null, null, [[0, 9]]);
  });
  const result = Promise.all(arrValidate);
  return result;
};

module.exports = validateLinks;