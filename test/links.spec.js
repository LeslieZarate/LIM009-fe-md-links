import { checkRouteIsFile ,checkRouteIsDirectory} from "../src/md-links/controller/links.js" 
const path = require('path')

describe('checkRouteIsFile',()=>{
  it('Deberia ser una funcion',()=>{
		expect(typeof checkRouteIsFile).toBe('function');
	});
	it('Deberia retornar true si la ruta es un archivo ',()=>{
		expect(checkRouteIsFile(path.resolve('./src/md-links/index.js'))).toBe(true);
    });
  it('Deberia retornar false si la ruta es una carpeta',()=>{
		expect(checkRouteIsFile(path.resolve('./src/md-links'))).toBe(false);
	});
});

describe('checkRouteIsDirectory',()=>{
  it('Deberia ser una funcion',()=>{
      expect(typeof checkRouteIsDirectory).toBe('function');
  });
  it('Deberia retornar true si la ruta es una carpeta ',()=>{
    expect(checkRouteIsDirectory(path.resolve('./src/md-links'))).toBe(true);
  });
  it('Deberia retornar false si la ruta es un archivo',()=>{
    expect(checkRouteIsDirectory(path.resolve('./src/md-links/index.js'))).toBe(false);
  }); 
});