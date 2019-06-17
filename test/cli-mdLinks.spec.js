const path = require('path');
const mdLinksCli = require('../src/cli-mdLinks');

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
		mdLinksCli(path.resolve('./prueba/file.md'), {}).then(result=>{
			console.log(result)
			expect(result).toBe(`${path.resolve('./prueba/file.md')} https://es.yahoo.com/ Yahoo\n`)
			done()
		});		
	});

	it('Deberia retornar uns lista de los links validados  ',(done)=>{
		mdLinksCli(path.resolve('./prueba/file.md'), { validate:true}).then(result=>{
		    expect(result).toBe(`${path.resolve('./prueba/file.md')} https://es.yahoo.com/ Yahoo 200 OK\n`)
			done()
		});		
	});

	it('Deberia retornar un mensaje de error ',(done)=>{
		mdLinksCli(path.resolve('./prueba/fie.md'), { validate:true}).then(result=>{
		    expect(result).toBe(`ENOENT: no such file or directory : \n${path.resolve('./prueba/fie.md')}`)
			done()
		});		
	});
});