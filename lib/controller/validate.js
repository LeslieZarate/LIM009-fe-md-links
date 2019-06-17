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
          return regeneratorRuntime.awrap(fetch(link));

        case 3:
          response = _context.sent;
          link.status = response.status; // estado de respuesta http(n°)

          if (link.status >= 200 && link.status < 400) {
            link.statusText = response.statusText; // ok /fail
          } else {
            link.statusText = 'FAIL';
          }

          return _context.abrupt("return", link);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          link.status = _context.t0.code;
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
/*
const obj = [
	{ href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
		text: 'Node.js y npm',
		file: "E:/LABORATORIA/LIM009-fe-md-links/README.md"
	},
	{ href: 'http://ruta-inexistente',
	  text: 'Node.js y npm',
	 file: "E:/LABORATORIA/LIM009-fe-md-links/README.md" }]
	
	validateLinks(obj).then(res=>console.log(res)).catch(err=>console.log(err))
 
/*
const validateLinks  = (arraylinks) =>{
  const prom = (link) => new Promise((resolve)=>{
		fetch(link.href)
			.then(res => {
				link.code = res.status;  //
				if(link.code >= 200 && link.code <= 400){
					link.status = res.statusText ;
					resolve(link)
				}else{
					link.status = 'FAIL';
					resolve(link)
				}
			})
			.catch(error => {
				reject(error)
			  error = 'No es una URL válida';
				link.code = error;
				link.status = 'FAIL';

			})
	});

	const arrayPromises = arraylinks.map(prom);
	const result = Promise.all(arrayPromises);
	return result
}
*/