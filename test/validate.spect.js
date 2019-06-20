const path = require('path')
const validate = require('../src/controller/validate.js')

const arrObj = [{
	href: 'https://es.wikipedia.org/wiki/Markdown',
	text: 'Markdown',
	file: path.resolve('./prueba/contenido/contenido.md')
},
{
	href: 'https://nodejs.org/',
	text: 'Node.js',
	file: path.resolve('./prueba/contenido/contenido.md')
},
{
	href:
		'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
	text: 'Github-pokemon',
	file: path.resolve('./prueba/contenido/contenido.md')
},
{
	href: 'http://ruta-inexistente',
	text: 'inexitente',
	file: path.resolve('./prueba/contenido/contenido.md')
}]
const arrObjRes = [{
	href: 'https://es.wikipedia.org/wiki/Markdown',
	text: 'Markdown',
	file: path.resolve('./prueba/contenido/contenido.md'),
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://nodejs.org/',
	text: 'Node.js',
	file: path.resolve('./prueba/contenido/contenido.md'),
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
	text: 'Github-pokemon',
	file: path.resolve('./prueba/contenido/contenido.md'),
	status: 404,
	statusText: 'FAIL'
},
{
	href: 'http://ruta-inexistente',
	text: 'inexitente',
	file: path.resolve('./prueba/contenido/contenido.md'),
	status: 'ENOTFOUND',
	statusText: 'FAIL'
}]


describe('validate', () => {
	it('deberia ser una funcion', () => {
		expect(typeof validate).toBe('function')
	});
	it('deberia retornar un nuevo array ', (done) => {
		validate(arrObj).then(result => {
			expect(result).toEqual(arrObjRes)
			done()
		});
	});
	it('deberia retornar un nuevo array ', (done) => {
		validate(arrObj).then(result => {
			expect(result).toEqual(arrObjRes)
			done()
		});
	});
})
