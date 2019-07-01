const fetchMock = require('../__mocks__/node-fetch');
fetchMock.config.sendAsJson = false;

const path = require('path');
const fn = require('../src/cli-mdLinks');

fetchMock
  .mock('http://community.laboratoria.la/c/js', 200)
  .mock('https://github.com/workshopper/learnyounode', 400)
  .mock('ttps://github.com/workshopper/how-to-npm', 300)
  .mock('https://es.yahoo.com/', 300);
		

describe('Cli md-links', ()=>{
  it('Deberia ser una funcion', ()=>{
    expect(typeof fn.mdLinksCli).toBe('function');
  });

  it('Deberia retornar  el total y los links unicos', (done)=>{
    fn.mdLinksCli(path.resolve('./prueba/directory'), { stats: true }).then(result=>{
		    expect(result).toBe('Total: 4\nUnique: 3');
      done();
    });		
  });

  it('Deberia retornar el total y los links unicos', (done)=>{
    fn.mdLinksCli(path.resolve('./prueba/directory'), { stats: true, validate: true}).then(result=>{
		    expect(result).toBe('Total: 4\nUnique: 3\nBroken: 1');
      done();
    });		
  });

  it('Deberia retornar uns lista de los links ', (done)=>{
    fn.mdLinksCli(path.resolve('./prueba/file.md'), {}).then(result=>{
      expect(result).toBe(`${path.resolve('./prueba/file.md')} https://es.yahoo.com/ Yahoo\n`);
      done();
    });		
  });

  it('Deberia retornar uns lista de los links validados  ', (done)=>{
    fn.mdLinksCli(path.resolve('./prueba/file.md'), { validate: true}).then(result=>{
		    expect(result).toBe(`${path.resolve('./prueba/file.md')} https://es.yahoo.com/ Yahoo 300 OK\n`);
      done();
    });		
  });

  it('Deberia retornar un mensaje de error ', (done)=>{
    fn.mdLinksCli(path.resolve('./prueba/fie.md'), { validate: true}).then(result=>{
      expect(result).toBe(`ENOENT: no such file or directory, stat '${path.resolve('./prueba/fie.md')}'`);			
      done();
    });		
  });
});