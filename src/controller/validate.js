const fetch = require("node-fetch");

const validateLinks  = (arraylinks) =>{
  const prom = (link) => new Promise((resolve)=>{		
		fetch(link.href)
			.then(res => {
				link.code = res.status; 
				if(link.code >= 200 && link.code <= 400){
					link.status = res.statusText ; 
					resolve(link)
				}else{
					link.status = 'FAIL';
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
	const arrayPromises = arraylinks.map(prom);
	const result = Promise.all(arrayPromises);
	return result
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
