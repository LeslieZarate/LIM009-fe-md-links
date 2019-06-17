"use strict";

const mdLinks = require('./index');

const fnStatsLinks = require('./controller/stats');

const mdLinksCli = (path, options) => {
  var resultMdlinks, result, stats;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        resultMdlinks = '';

        if (!options.stats) {
          _context.next = 10;
          break;
        }

        _context.next = 5;
        return regeneratorRuntime.awrap(mdLinks(path, options));

      case 5:
        result = _context.sent;
        stats = fnStatsLinks(result);
        options.validate ? resultMdlinks += `Total: ${stats.total} \nUnique: ${stats.unique} \nBroken: ${stats.broken}` : resultMdlinks += `Total: ${stats.total} \nUnique: ${stats.unique}`;
        _context.next = 14;
        break;

      case 10:
        _context.next = 12;
        return regeneratorRuntime.awrap(mdLinks(path, options));

      case 12:
        result = _context.sent;
        result.forEach(elemet => {
          !options.validate ? resultMdlinks += `${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)}\n` : resultMdlinks += `${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)} ${elemet.status} ${elemet.statusText}\n`;
        });

      case 14:
        return _context.abrupt("return", resultMdlinks);

      case 17:
        _context.prev = 17;
        _context.t0 = _context["catch"](0);
        _context.t0 = `ENOENT: no such file or directory : \n${path}`;
        return _context.abrupt("return", _context.t0);

      case 21:
      case "end":
        return _context.stop();
    }
  }, null, null, [[0, 17]]);
};

module.exports = mdLinksCli;