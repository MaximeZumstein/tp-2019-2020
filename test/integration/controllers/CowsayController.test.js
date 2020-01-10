var supertest = require('supertest');

describe('CowsayController.add', function() {

  describe('#add()', function() {
    it('should redirect to /say', function (done) {
      supertest(sails.hooks.http.app)
      .post('/add')
      .send({ sentence: 'test', email: 'test@test.fr' })
      .expect(302)
      .expect('location','/say', done);
    });
  });

});