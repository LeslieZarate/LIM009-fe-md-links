import path from 'path'
import {checkRouteIsFile,readDirectory,getPathsOfRoute} from '../src/controller/links.js'

const arrFile = [path.resolve('./prueba/readmi.md')];
const arrFolder = [ path.resolve('./prueba/contenido/reademiApp.md'),
path.resolve('./prueba/readmi.md')];

describe('checkRouteIsFile',()=>{
  it('Deberia ser una funcion',()=>{
    expect(typeof checkRouteIsFile).toBe('function');
	});
	
  it('Deberia retornar true si la ruta es un archivo ',(done)=>{
		checkRouteIsFile(path.resolve('./src/index.js')).then(result =>{
			expect(result).toBe(true);
			done()
		})    
	});	
  it('Deberia retornar false si la ruta es una carpeta',(done)=>{
		checkRouteIsFile(path.resolve('./src')).then(result =>{
			expect(result).toBe(false);
			done()
		})    
	});
});

describe('readDirectory',()=>{
  it('Deberia ser una funcion',()=>{
    expect(typeof readDirectory).toBe('function');
	});
	
  it('Deberia retornar true si la ruta es un archivo ',(done)=>{
		const arrfiles = [ 'app.js', 'index.html', 'reademiApp.md' ]
		readDirectory(path.resolve('./prueba/contenido')).then(result =>{
			expect(result).toEqual(arrfiles);
			done()
		})    
	});	
});

describe('getPathsOfRoute',()=>{
  it('Deberia ser una funcion',()=>{
      expect(typeof getPathsOfRoute).toBe('function');
  });
  it('Deberia retornar un array si la ruta es archivo',(done)=>{
		getPathsOfRoute(path.resolve('./prueba/readmi.md')).then(result=>{
			expect(result).toEqual(arrFile);
			done()
		})
  
  });
  it('Deberia retornar un array si la ruta es carpeta',(done)=>{
    getPathsOfRoute(path.resolve('./prueba')).then(result=>{
			expect(result).toEqual(arrFolder);
			done()
		})
  }); 
});