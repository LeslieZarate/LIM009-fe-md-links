#!/usr/bin/env node
const mdLinks = require('./index')
const fnStat =  require('./controller/stats')

const [, , ...args] = process.argv;    // Grab provide args.
const path = args[0];
const optsCli = args.slice(1)

const options = {
	validate: false,
	stats: false
};

optsCli.forEach(opts => {
	if ((opts === '--validate' || opts === '-v' ) && (opts = '--stats' || opts === '-s')) {
		options.validate = true;
		options.stats = true
	}
	else if (opts === '--validate' || opts === '-v') {
		options.validate = true
	} else if (opts === '--stats' || opts === '-s') {
		opts.stats = true;
	} else {
		console.log('options no existe')
	}
})

if(options.validate === true && options.stats === true){

}else if (options.validate === true && options.stats === false){

}
else if (options.validate === false && options.stats === true){
	
}
else{
	mdLinks(path, options)
	.then(res => console.log(res))
	.catch(err => console.log(err))


}


