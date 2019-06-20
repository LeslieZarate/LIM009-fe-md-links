const fetch = require("node-fetch");
const validateLinks = (arraylinks) => {
	const arrValidate = arraylinks.map(async link => {	
		try {	
		const response = await fetch(link.href)	
			link.status = response.status                           // estado de respuesta http(n°)
			if (link.status >= 200 && link.status < 400) {
			  link.statusText = 'OK';			 	       // ok /fail
			} else {
			  link.statusText = 'FAIL';
			}
			return link			
		}
		catch (error) {
			link.status = error.message
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
	
{ href: 'https://github.com/stevekane/promise-it-wont-hurt',
text: 'promise-it-wont-hurt',
file: 'E:\\LABORATORIA\\LIM009-fe-md-links\\prueba\\prueba.md' },

{ href:
 'https://github.com/Laboratoria/LIM009-data-lovers/bpokemongolive.com',
text: 'Github-pokemon',
file: 'E:\\LABORATORIA\\LIM009-fe-md-links\\prueba\\prueba.md' },
{ href: 'https://es.yahoo.com/',
text: 'Yahoo',
file: 'E:\\LABORATORIA\\LIM009-fe-md-links\\prueba\\prueba.md' }]

validateLinks(obj).then(res=>console.log(res))/*.catch(error =>console.log(error))*/