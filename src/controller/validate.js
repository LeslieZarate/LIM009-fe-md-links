const fetch = require("node-fetch");
const validateLinks = (arraylinks) => {
	const arrValidate = arraylinks.map(async link => {
		try {
			const response = await fetch(link)
			link.status = response.status  // estado de respuesta http(n°)
				if (link.status >= 200 && link.status < 400) {
			  link.statusText = response.statusText;				// ok /fail
			} else {
			  link.statusText = 'FAIL';
			}
			return link
		}
		catch (error) {
			link.status = error.code
			link.statusText = 'FAIL'
			return link
		}
	});
	const result = Promise.all(arrValidate)
	return result
}

module.exports = validateLinks


















/*

const obj = [
	{ href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
		text: 'Node.js y npm',
		file: "E:/LABORATORIA/LIM009-fe-md-links/README.md"
	},
	{ href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
	  text: 'Node.js y npm',
	 file: "E:/LABORATORIA/LIM009-fe-md-links/README.md" }]
	
	validateLinks(obj).then(res=>console.log(res))
 

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