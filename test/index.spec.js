const fetchMock = require('../__mocks__/node-fetch');
fetchMock.config.sendAsJson = false;

const path = require('path')
const mdLinks = require('../src/index')

const arrResult3 = [
	{
		href: 'http://community.laboratoria.la/c/js',
		text: 'foro de la comunidad',
		file: path.resolve('./prueba/directory/file1.md')
	},
	{
		href: 'http://community.laboratoria.la/c/js',
		text: 'foro de la comunidad',
		file: path.resolve('./prueba/directory/file1.md')
	},
	{
		href: 'https://github.com/workshopper/learnyounode',
		text: 'learnyounode',
		file: path.resolve('./prueba/directory/folder1/file2.md')
	},
	{
		href: 'ttps://github.com/workshopper/how-to-npm',
		text: 'how-to-npm',
		file: path.resolve('./prueba/directory/folder1/file2.md')
	}
]

const arrResult5 = [
	{
		href: 'http://community.laboratoria.la/c/js',
		text: 'foro de la comunidad',
		file: path.resolve('./prueba/directory/file1.md'),
		status: 200,
    statusText: 'OK'
	},
	{
		href: 'http://community.laboratoria.la/c/js',
		text: 'foro de la comunidad',
		file: path.resolve('./prueba/directory/file1.md'),
		status: 200,
    statusText: 'OK'
	},
	{
		href: 'https://github.com/workshopper/learnyounode',
		text: 'learnyounode',
		file: path.resolve('./prueba/directory/folder1/file2.md'),
		status: 400,
    statusText: 'FAIL'
	},
	{
		href: 'ttps://github.com/workshopper/how-to-npm',
		text: 'how-to-npm',
		file: path.resolve('./prueba/directory/folder1/file2.md'),
		status: 300,
    statusText: 'OK'
	}
]

describe('mdLinks', () => {

	fetchMock
		.mock('http://community.laboratoria.la/c/js', 200)
		.mock('https://github.com/workshopper/learnyounode', 400)
		.mock('ttps://github.com/workshopper/how-to-npm', 300)

	it('deberia ser una funcion', () => {
		expect(typeof mdLinks).toBe('function')
	});
	it('deberia retornar un nuevo array sin validiar los links', (done) => {
		mdLinks(path.resolve('./prueba/directory'), { validate: false }).then(result => {
			expect(result).toEqual(arrResult3)
			done()
		})
	});	

	it('deberia retornar un nuevo array validando los links', (done) => {
		mdLinks(path.resolve('./prueba/directory'), { validate: true }).then(result => {
			expect(result).toEqual(arrResult5)
			done()
		})
	});

});
