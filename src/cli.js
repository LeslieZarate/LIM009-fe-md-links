#!/usr/bin/env node
const mdLinks = require('./index')
const fnStatsLinks = require('./controller/stats')

const [, , ...args] = process.argv;    // Grab provide args.
const path = args[0];
const optionsText = args.slice(1)

const optionsCli = (arrOptions) => {
	const options = {}
	arrOptions.forEach(opts => {
		if (opts === '--validate' || opts === '-v') {
			options.validate = true;
		} else if (opts === '--stats' || opts === '-s') {
			options.stats = true;
		} else if ((opts === '--validate' || opts === '-v') && (opts = '--stats' || opts === '-s')) {
			options.validate = true;
			options.stats = true
		}
		else {
			console.log('options no existe')
		}
	});
	return options
}

const mdLinksCli = (path, options) => {
	if (options.stats) {
		return mdLinks(path, options)
			.then(result => fnStatsLinks(result))
			.then(stats => {
				let resultMdlinks = '';
				(options.validate)
					? resultMdlinks += `Total: ${stats.total} \nUnique: ${stats.unique} \nBroken: ${stats.broken}`
					: resultMdlinks += `Total: ${stats.total} \nUnique: ${stats.unique}`
					return resultMdlinks
			})
	}
	else {
		return mdLinks(path, options)
			.then(result => {
				let resultMdlinks = '';
				result.forEach(elemet => {
					(!options.validate)
						? resultMdlinks +=`\n${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)} `
						: resultMdlinks +=`\n ${elemet.status} ${elemet.statusText} ${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)} `
				})
				return resultMdlinks
				
			})
	}
}

const options = optionsCli(optionsText)
mdLinksCli(path, options).then(res=>console.log(res)).catch(err =>console.log(err))

module.exports = mdLinksCli




/*

if(options.validate === true && options.stats === true){
	mdLinks(path, options)
	.then(result => console.log(result))
	.catch(err => console.log(err))
}

else if (options.validate === false && options.stats === true){
	mdLinks(path, options)
	.then(result => {
		console.log(fnStatsLinks(result))
	})
	.catch(err => console.log(err))
}

*/