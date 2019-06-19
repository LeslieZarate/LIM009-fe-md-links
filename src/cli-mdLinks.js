const mdLinks = require('./index')
const fnStatsLinks = require('./controller/stats')
const mdLinksCli = async (path, options) => {
	try{
		let resultMdlinks = '';
		if (options.stats) {
			const result = await mdLinks(path, options)
			const stats  = fnStatsLinks(result)
			options.validate 
				? resultMdlinks += `Total: ${stats.total} \nUnique: ${stats.unique} \nBroken: ${stats.broken}`
				: resultMdlinks += `Total: ${stats.total} \nUnique: ${stats.unique}`
		}
		else {
			const result = await mdLinks(path, options)
			console.log(result)
			result.forEach(elemet => {
				!options.validate
					? resultMdlinks +=`${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)}\n`
					: resultMdlinks +=`${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)} ${elemet.status} ${elemet.statusText}\n`
			})
		}
		return resultMdlinks
	}
	catch(err){
		//err = `ENOENT: no such file or directory : \n${path}`
		return err
	}
	
}

module.exports = mdLinksCli