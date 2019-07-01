#!/usr/bin/env node
const fn = require('./cli-mdLinks');

const [, , ...args] = process.argv; // Grab provide args.
const path = args[0];
const optionsText = args.slice(1);

if (args.length > 0) {
  const options = fn.optionsCli(optionsText);
  fn.mdLinksCli(path, options)
    .then(res=>console.log(res))
    .catch(err =>console.log(err));
} else {
  console.log('Ingresa una Ruta Válida');
}
