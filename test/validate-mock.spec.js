const fetchMock = require('../__mocks__/node-fetch');
fetchMock.config.sendAsJson = false;
const validateLinks = require('../src/controller/validate')



describe('validateLinks',()=>{     
    it('Debería retornar status 200', (done) => {
        fetchMock.mock('http://example.com', 200)
        validateLinks([{href:'http://example.com', text: 'text', file: 'file'}])
        .then(result => {
            console.log(result)
            
            done()
        })
    });


});