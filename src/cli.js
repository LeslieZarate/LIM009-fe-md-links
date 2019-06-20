#!/usr/bin/env node
const mdLinksCli = require('./cli-mdLinks')

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
			options.stats = true;
		}
		else {
			console.log('La opción no existe');
		}
	});
	return options
}
if(args.length > 0){
	const options = optionsCli(optionsText)
	mdLinksCli(path, options).then(res=>console.log(res)).catch(err =>console.log(err))
}else{
	console.log('Ingresa una Ruta')
}
