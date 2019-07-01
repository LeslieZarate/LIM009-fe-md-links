const fetchMock = require('../__mocks__/node-fetch');
fetchMock.config.sendAsJson = false;
const validateLinks = require('../src/controller/validate');

fetchMock
  .mock('https://nodejs.org/en/', 200) 
  .mock('http://algo.com/2/3/', 400) 
  .mock('http://inexistente.com', { throws: new Error('Failed to fetch') }); 


describe('validateLinks', ()=>{    
  it('Debería retornar status 200', (done) => {
    validateLinks([{href: 'https://nodejs.org/en/', text: 'text', file: 'file'}])
      .then(result => {
        const link = result.filter(element => element.href === 'https://nodejs.org/en/');
        expect(link[0].status).toBe(200); 
        expect(link[0].statusText).toBe('OK');            
        done();
      });
  });
  it('Debería retornar status 400', (done) => {
    validateLinks([{href: 'http://algo.com/2/3/', text: 'text', file: 'file'}])
      .then(result => {
        const link = result.filter(element => element.href === 'http://algo.com/2/3/');
        expect(link[0].status).toBe(400);   
        expect(link[0].statusText).toBe('FAIL');           
        done();
      });
  });

  it('Debería retornar status Failed to fetch', (done) => {
    validateLinks([{href: 'http://inexistente.com', text: 'text', file: 'file'}])
      .then(result => {
        const link = result.filter(element => element.href === 'http://inexistente.com');
        expect(link[0].status).toBe('Failed to fetch');               
        done();
      });
  });
});