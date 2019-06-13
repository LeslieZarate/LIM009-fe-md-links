#!/usr/bin/env node
const mdLinks = require('./index')
// Grab provide args.
const [, , ...args] = process.argv;
const path = args[0];
const optsCli = args.slice(1)

const options = {
	validate: false,
	stats: false
};

optsCli.forEach(opts => {
	if ((opts === '--validate') && (opts = '--stats')) {
		options.validate = true;
		options.stats = true
	}
	else if (opts === '--validate') {
		options.validate = true
	} else if (opts === '--stats') {
		opts.stats = true;
	} else {
		console.log('options no existe')
	}
})


mdLinks(path, options)
	.then(res => console.log(res))
	.catch(err => console.log(err))


