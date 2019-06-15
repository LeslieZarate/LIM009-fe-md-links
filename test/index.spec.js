const path = require('path')
const mdLinks = require('../src/index')

const arrResult3 = [
	{
		href: 'http://community.laboratoria.la/c/js',
		text: 'foro de la comunidad',
		file: path.resolve('./prueba/prueba.md')
	},
	{
		href: 'https://github.com/workshopper/learnyounode',
		text: 'learnyounode',
		file: path.resolve('./prueba/prueba.md')
	},
	{
		href: 'https://github.com/workshopper/how-to-npm',
		text: 'how-to-npm',
		file: path.resolve('./prueba/prueba.md')
	},
	{
		href: 'https://github.com/stevekane/promise-it-wont-hurt',
		text: 'promise-it-wont-hurt',
		file: path.resolve('./prueba/prueba.md')
	},
	{
		href:
			'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
		text: 'Github-pokemon',
		file: path.resolve('./prueba/prueba.md')
	},
	{
		href: 'https://es.yahoo.com/',
		text: 'Yahoo',
		file: path.resolve('./prueba/prueba.md')
	}]

const arrResult5 = [{
	href: 'http://community.laboratoria.la/c/js',
	text: 'foro de la comunidad',
	file: path.resolve('./prueba/prueba.md'),
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://github.com/workshopper/learnyounode',
	text: 'learnyounode',
	file: path.resolve('./prueba/prueba.md'),
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://github.com/workshopper/how-to-npm',
	text: 'how-to-npm',
	file: path.resolve('./prueba/prueba.md'),
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://github.com/stevekane/promise-it-wont-hurt',
	text: 'promise-it-wont-hurt',
	file: path.resolve('./prueba/prueba.md'),
	status: 200,
	statusText: 'OK'
},
{
	href:
		'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
	text: 'Github-pokemon',
	file: path.resolve('./prueba/prueba.md'),
	status: 404,
	statusText: 'FAIL'
},
{
	href: 'https://es.yahoo.com/',
	text: 'Yahoo',
	file: path.resolve('./prueba/prueba.md'),
	status: 200,
	statusText: 'OK'
}]

describe('mdLinks', () => {
	it('deberia ser una funcion', () => {
		expect(typeof mdLinks).toBe('function')
	});
	it('deberia retornar un nuevo array sin validiar los links', (done) => {
		mdLinks(path.resolve('./prueba/prueba.md'), { validate: false }).then(result => {
			expect(result).toEqual(arrResult3)
			done()
		})
	});
	it('deberia retornar un nuevo array validando los links', (done) => {
		mdLinks(path.resolve('./prueba/prueba.md'), { validate: true }).then(result => {
			expect(result).toEqual(arrResult5)
			done()
		})
	});
	it('deberia retornar un nuevo array validando los links', (done) => {
		mdLinks(path.resolve('./prueb/prueba.md'), { validate: true }).then(result => {
			expect(result).toBe("ENOENT: no such file or directory,E:\\LABORATORIA\\LIM009-fe-md-links\\prueb\\prueba.md")
			done()
		})
	});
});
