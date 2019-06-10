const fetch = require("node-fetch");

const validateLinks  = (arraylinks) =>{
  const prom = (link) => new Promise((resolve)=>{		
			fetch(link.href)
			.then(res => {
				link.code = res.status; console.log(link.code);
				if(link.code >= 200 && link.code <= 400){
					link.status = res.statusText ; console.log(link.status)
					resolve(link)
				}else{
					link.status = 'FAIL' ; console.log(link.status)
					resolve(link)
				}					 
				
			})
			.catch(error => {
			  error = 'No es una URL válida';
				link.code = error;
				link.status = 'FAIL';
				resolve(link)
			})
	});

	const arrayPromises = arraylinks.map(prom)
	return Promise.all(arrayPromises)
 }


const obj = [
{ href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
	text: 'Node.js y npm',
	file: "E:/LABORATORIA/LIM009-fe-md-links/README.md" 
},
{ href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
  text: 'Node.js y npm',
 file: "E:/LABORATORIA/LIM009-fe-md-links/README.md" }]

validateLinks(obj).then(res=>console.log(res))

module.exports = validateLinks
