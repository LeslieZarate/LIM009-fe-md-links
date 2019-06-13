const path = require('path')
const fn = require('../src/controller/links')

describe('readFile', () => {
  it('readFile deberia ser una fucnion',()=>{
		expect(typeof fn.readFile).toBe('function')
	});
	it.only('Deberia poder leer el archivo',()=>{
		fn.readFile(path.resolve('./prueba/notas.txt')).then((result)=>{
			console.log(result)
		})
	})

});

describe('filesMd', () => {
  it('filesMd deberia ser una fucnion',()=>{
		expect(typeof fn.filesMd).toBe('function')
	});

});

describe('getLinksMd', () => {
  it('getLinksMd deberia ser una fucnion',()=>{
		expect(typeof fn.getLinksMd).toBe('function')
	});

});