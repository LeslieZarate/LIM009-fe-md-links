const path = require('path')
const fn = require('../src/controller/links')


const arrFile = [path.resolve('./prueba/readmi.md')];
const arrFolder = [ path.resolve('./prueba/contenido/app.js'),
path.resolve('./prueba/contenido/index.html'),path.resolve('./prueba/contenido/reademiApp.md'),];

describe('checkRouteIsFile',()=>{
  it('Deberia ser una funcion',()=>{
    expect(typeof fn.checkRouteIsFile).toBe('function');
	});
	
  it('Deberia retornar true si la ruta es un archivo ',(done)=>{
		fn.checkRouteIsFile(path.resolve('./src/index.js')).then(result =>{
			expect(result).toBe(true);
			done()
		})    
	});	
  it('Deberia retornar false si la ruta es una carpeta',(done)=>{
		fn.checkRouteIsFile(path.resolve('./src')).then(result =>{
			expect(result).toBe(false);
			done()
		})    
	});
});

describe('readDirectory',()=>{
  it('Deberia ser una funcion',()=>{
    expect(typeof fn.readDirectory).toBe('function');
	});
	
  it('Deberia retornar true si la ruta es un archivo ',(done)=>{
		const arrfiles = [ 'app.js', 'index.html', 'reademiApp.md' ]
		fn.readDirectory(path.resolve('./prueba/contenido')).then(result =>{
			expect(result).toEqual(arrfiles);
			done()
		})    
	});	
});

describe('getPathsOfRoute',()=>{
  it('Deberia ser una funcion',()=>{
      expect(typeof fn.getPathsOfRoute).toBe('function');
  });
  it('Deberia retornar un array si la ruta es archivo',(done)=>{
		fn.getPathsOfRoute(path.resolve('./prueba/readmi.md')).then(result=>{
			expect(result).toEqual(arrFile);
			done()
		})
  
  });
  it('Deberia retornar un array si la ruta es carpeta',(done)=>{
    fn.getPathsOfRoute(path.resolve('./prueba/contenido')).then(result=>{
			expect(result).toEqual(arrFolder);
			done()
		})
  }); 
});