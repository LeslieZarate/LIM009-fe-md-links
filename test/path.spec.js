import path from 'path'
import {validatePathAbsolute} from "../src/controller/path.js";

describe('validatePathAbsolute',()=>{
  it('Deberia ser una funcion',()=>{
		expect(typeof validatePathAbsolute).toBe('function');
	});

	it('Deberia retornar la misma ruta si es absoluta',()=>{
		expect(validatePathAbsolute(path.resolve('./src/index.js'))).toBe(path.resolve('./src/index.js'));
	});

	it('Deberia retornar la ruta convertida en absoluta si esta es relativa',()=>{
		expect(validatePathAbsolute('./src/index.js')).toBe(path.resolve('./src/index.js'));
	});
});