import path from 'path'
import { checkRouteIsFile ,checkRouteIsDirectory,getPathsOfRoute} from "../src/controller/links.js" 

const arrFile = [path.resolve('./prueba/readmi.md')];
const arrFolder = [ path.resolve('./prueba/contenido/reademiApp.md'),
path.resolve('./prueba/readmi.md')];

describe('checkRouteIsFile',()=>{
  it('Deberia ser una funcion',()=>{
		expect(typeof checkRouteIsFile).toBe('function');
	});
	it('Deberia retornar true si la ruta es un archivo ',()=>{
		expect(checkRouteIsFile(path.resolve('./src/index.js'))).toBe(true);
    });
  it('Deberia retornar false si la ruta es una carpeta',()=>{
		expect(checkRouteIsFile(path.resolve('./src'))).toBe(false);
	});
});

describe('checkRouteIsDirectory',()=>{
  it('Deberia ser una funcion',()=>{
      expect(typeof checkRouteIsDirectory).toBe('function');
  });
  it('Deberia retornar true si la ruta es una carpeta ',()=>{
    expect(checkRouteIsDirectory(path.resolve('./src/'))).toBe(true);
  });
  it('Deberia retornar false si la ruta es un archivo',()=>{
    expect(checkRouteIsDirectory(path.resolve('./src/index.js'))).toBe(false);
  }); 
});

describe('getPathsOfRoute',()=>{
  it('Deberia ser una funcion',()=>{
      expect(typeof getPathsOfRoute).toBe('function');
  });
  it('Deberia retornar un array si la ruta es archivo',()=>{
    expect(getPathsOfRoute(path.resolve('./prueba/readmi.md'))).toEqual(arrFile);
  });
  it('Deberia retornar un array si la ruta es carpeta',()=>{
    expect(getPathsOfRoute(path.resolve('./prueba'))).toEqual(arrFolder);
  }); 
});