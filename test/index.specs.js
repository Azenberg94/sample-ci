var request = require('supertest');
var api = require('../index');

describe('contact', function(){
    describe('GET /contacts', function(){
        it('Should return the list of contacts', function(){
            return request(api)
            .get('/contacts')
            .send()
            .expect(200);
        });
    });
    
    describe('POST /contacts/:name', function(){
        it('Should create a new contact', function(){
            return request(api)
            .post('/contacts/foo')
            .send()
            .expect(200);
        });
    });
    
    describe('PUT /contacts/:name', function(){
       it('Should update the contact with the same name', function(){
           return request(api)
           .put('/contacts/foo/bar')
           .send()
           .expect(200);
       }); 
    });
    
    describe('DELETE /contacts/:name', function(){
       it('Should delete the contact with the same name', function(){
          return request(api)
          .delete('/contacts/')
          .send()
          .expect(200);
       });
    });
});