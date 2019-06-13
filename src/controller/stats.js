
const statsLinks = (arraysLinks) => {    
    const stats = new Object;
    // Total de Links 
    stats.total = arraysLinks.length;
   
    // links Unicos
    const arrayHref = arraysLinks.map(link => link.href);
    const uniqueHref = [...new Set(arrayHref)].length;    
    stats.unique = uniqueHref;

      // Links Rotos 
    if(arraysLinks[0].hasOwnProperty('statusText')){  
     const brokenlinks = arraysLinks.filter(link=> link.statusText === 'FAIL');
     stats.broken = brokenlinks.length;
    }   
    return stats 
}
module.exports = statsLinks

const obj = [
	{ href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
		text: 'Node.js y npm',
        file: "E:/LABORATORIA/LIM009-fe-md-links/README.md",
        statusText : 'OK'
	},
	{ href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
	  text: 'Node.js y npm',
     file: "E:/LABORATORIA/LIM009-fe-md-links/README.md",
     statusText : 'FAIL'}]
	
console.log(statsLinks(obj))