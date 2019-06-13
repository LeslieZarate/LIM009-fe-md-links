const fetch = require("node-fetch");
const validateLinks = (arraylinks) => {
	const arrValidate = arraylinks.map(async link => {
		try {
			const response = await fetch(link)
			link.code = response.status  // estado de respuesta http
			if (link.code >= 200 && link.code < 400) {
				link.status = response.statusText;
			} else {
				link.status = 'FAIL';
			}
			return link
		}
		catch (error) {
			error = 'ERR_INTERNET_DISCONNECTED';
			link.code = error;
			link.status = 'ERR_INTERNET_DISCONNECTED'
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

validateLinks(obj).then(res=>console.log(res))*/



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