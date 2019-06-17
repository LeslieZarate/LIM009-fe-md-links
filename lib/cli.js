#!/usr/bin/env node
"use strict";

const mdLinksCli = require('./cli-mdLinks');

const [,, ...args] = process.argv; // Grab provide args.

const path = args[0];
const optionsText = args.slice(1);

const optionsCli = arrOptions => {
  const options = {};
  arrOptions.forEach(opts => {
    if (opts === '--validate' || opts === '-v') {
      options.validate = true;
    } else if (opts === '--stats' || opts === '-s') {
      options.stats = true;
    } else if ((opts === '--validate' || opts === '-v') && (opts = '--stats' || opts === '-s')) {
      options.validate = true;
      options.stats = true;
    } else {
      console.log('options no existe');
    }
  });
  return options;
};

const options = optionsCli(optionsText);
mdLinksCli(path, options).then(res => console.log(res)).catch(err => console.log(err));