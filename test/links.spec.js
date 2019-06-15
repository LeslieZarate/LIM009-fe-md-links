const path = require('path')
const fn = require('../src/controller/links')

const arrFolder = [path.resolve('./prueba/contenido/app.js'), path.resolve('./prueba/contenido/contenido.md'), path.resolve('./prueba/contenido/index.html'),];
const arrMd = [path.resolve('./prueba/prueba.md'), path.resolve('./prueba/contenido/contenido.md')];

const arrLinksMd = [
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
		href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
		text: 'Github-pokemon',
		file: path.resolve('./prueba/prueba.md')
	},
	{
		href: 'https://es.yahoo.com/',
		text: 'Yahoo',
		file: path.resolve('./prueba/prueba.md')
	},
	{
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
		href: 'https://es.yahoo.com/',
		text: 'Yahoo',
		file: path.resolve('./prueba/contenido/contenido.md')
	}]

describe('readFile', () => {
	it('readFile deberia ser una fucnion', () => {
		expect(typeof fn.readFile).toBe('function')
	});
	it('Deberia poder leer el archivo', (done) => {
		fn.readFile(path.resolve('./prueba/notas.txt')).then((result) => {
			expect(result).toBe('Markdown es un lenguaje de marcado ligero muy popular entre developers.')
			done()
		})
	})

});

describe('filesMd', () => {
	it('filesMd deberia ser una fucnion', () => {
		expect(typeof fn.filesMd).toBe('function')
	});

	it('Deberia retornar un array con solo archivos .md', () => {
		expect(fn.filesMd(arrFolder)).toEqual([path.resolve('./prueba/contenido/contenido.md')])
	});

});

describe('getLinksMd', () => {
	it('getLinksMd deberia ser una fucnion', () => {
		expect(typeof fn.getLinksMd).toBe('function')
	});
	it('deberia Retornar un array de objetos', (done) => {
		fn.getLinksMd(arrMd).then(result => {
			expect(result).toEqual(arrLinksMd)
			done()
		})
	});

});