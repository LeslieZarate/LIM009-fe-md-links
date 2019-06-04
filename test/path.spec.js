import {validatePathAbsolute} from "../src/md-links/controller/path.js";
const path = require('path')

describe('validatePathAbsolute',()=>{
  it('Deberia ser una funcion',()=>{
		expect(typeof validatePathAbsolute).toBe('function');
	});

	it('Deberia retornar la misma ruta si es absoluta',()=>{
		expect(validatePathAbsolute(path.resolve('./src//md-links/index.js'))).toBe(path.resolve('./src/md-links/index.js'));
	});

	it('Deberia retornar la ruta convertida en absoluta si esta es relativa',()=>{
		expect(validatePathAbsolute('./src/md-links/index.js')).toBe(path.resolve('./src/md-links/index.js'));
	});
});