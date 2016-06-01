var request = require('supertest');
var api = require('../index');

describe('contact', function(){
    describe('GET /contacts', function(){
        it('Should return the list of contacts', function(){
            return request(api)
            .get('/api/contacts')
            .send()
            .expect(200);
        });
    });
    
    describe('POST /contacts/:name', function(){
        it('Should create a new contact', function(){
            return request(api)
            .post('/api/contacts/foo')
            .send()
            .expect(200);
        });
        
        it('should not be authorized to create a new contact with an already existing name', function(){
            return request(api)
            .post('/api/contacts/exist')
            .send()
            .expect(403);
        });
    });
    
    describe('PUT /contacts/:name', function(){
       it('Should update the contact with the same name', function(){
           return request(api)
           .put('/api/contacts/foo/bar')
           .send()
           .expect(200);
       }); 
    });
    
    describe('DELETE /contacts/:name', function(){
       it('Should delete the contact with the same name', function(){
          return request(api)
          .delete('/api/contacts/foo')
          .send()
          .expect(200);
       });
    });
});