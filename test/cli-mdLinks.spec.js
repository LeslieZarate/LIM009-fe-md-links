const path = require('path');
const mdLinksCli = require('../src/cli-mdLinks');
const Path = path.resolve('./prueba/prueba.md')

const resultMd = `${Path} http://community.laboratoria.la/c/js foro de la comunidad
${Path} https://github.com/workshopper/learnyounode learnyounode
${Path} https://github.com/workshopper/how-to-npm how-to-npm
${Path} https://github.com/stevekane/promise-it-wont-hurt promise-it-wont-hurt
${Path} https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com Github-pokemon
${Path} https://es.yahoo.com/ Yahoo`

describe('Cli md-links',()=>{
	it('Deberia ser una funcion',()=>{
		expect(typeof mdLinksCli).toBe('function')
	});
	it('Deberia retornar  el total y los links unicos',(done)=>{
		mdLinksCli(path.resolve('./prueba/prueba.md'), { stats: true }).then(result=>{
		    expect(result).toBe("Total: 6 \nUnique: 6")
			done()
		});		
	});
	it('Deberia retornar el total y los links unicos',(done)=>{
		mdLinksCli(path.resolve('./prueba/prueba.md'), { stats: true ,validate:true}).then(result=>{
		    expect(result).toBe("Total: 6 \nUnique: 6 \nBroken: 1")
			done()
		});		
	});

	it('Deberia retornar uns lista de los links ',(done)=>{
		mdLinksCli(path.resolve('./prueba/prueba.md'), {}).then(result=>{
			expect(result).toEqual(resultMd)
			done()
		});		
	});

	it('Deberia retornar uns lista de los links ',(done)=>{
		mdLinksCli(path.resolve('./prueba/prueba.md'), { validate:true}).then(result=>{
		    expect(result).toBe()
			done()
		});		
	});
});