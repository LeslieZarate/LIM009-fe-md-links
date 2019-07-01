const path = require('path');
const fn = require('../src/controller/paths');

describe('validatePathAbsolute', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof fn.validatePathAbsolute).toBe('function');
  });

  it('Deberia retornar la misma ruta si es absoluta', () => {
    expect(fn.validatePathAbsolute(path.resolve('./src/index.js'))).toBe(path.resolve('./src/index.js'));
  });

  it('Deberia retornar la ruta convertida en absoluta si esta es relativa', () => {
    expect(fn.validatePathAbsolute('./src/index.js')).toBe(path.resolve('./src/index.js'));
  });
});

describe('checkRouteIsFile', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof fn.checkRouteIsFile).toBe('function');
  });

  it('Deberia retornar true si la ruta es un archivo ', (done) => {
    fn.checkRouteIsFile(path.resolve('./src/index.js')).then(result => {
      expect(result).toBe(true);
      done();
    });
  });
  it('Deberia retornar false si la ruta es una carpeta', (done) => {
    fn.checkRouteIsFile(path.resolve('./src')).then(result => {
      expect(result).toBe(false);
      done();
    });
  });
});

describe('readDirectory', () => {	
  it('Deberia ser una funcion', () => {
    expect(typeof fn.readDirectory).toBe('function');
  });

  it('Deberia retornar un arry de los archivos de la carpeta ', (done) => {
    const arrfiles = ['app.js', 'contenido.md', 'index.html'];
    fn.readDirectory(path.resolve('./prueba/contenido')).then(result => {
      expect(result).toEqual(arrfiles);
      done();
    });
  });
});

describe('getPathsOfRoute', () => {
  const arrFile = [path.resolve('./prueba/prueba.md')];
  const arrFolder = [path.resolve('./prueba/contenido/app.js'), path.resolve('./prueba/contenido/contenido.md'), path.resolve('./prueba/contenido/index.html'), ];

  it('Deberia ser una funcion', () => {
    expect(typeof fn.getPathsOfRoute).toBe('function');
  });
  it('Deberia retornar un array si la ruta es archivo', (done) => {
    fn.getPathsOfRoute(path.resolve('./prueba/prueba.md')).then(result => {
      expect(result).toEqual(arrFile);
      done();
    });
  });
  it('Deberia retornar un array si la ruta es carpeta', (done) => {
    fn.getPathsOfRoute(path.resolve('./prueba/contenido')).then(result => {
      expect(result).toEqual(arrFolder);
      done();
    });
  });
});