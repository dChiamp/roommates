var controller = require('../controllers/usersController')
  , http_mocks = require('node-mocks-http')
  , should = require('should')

function buildResponse() {
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}

describe('User Controller Tests', function() {

  it('index', function(done) {
    var response = buildResponse()
    var request  = http_mocks.createRequest({
      method: 'GET',
      url: '/',
    })

    response.on('end', function() {
      console.log("hi derek ");
      response._getData().should.equal('test');
      done()
    })

    controller.index(request, response)
  })

  it('index fail', function(done) {
    var response = buildResponse()
    var request  = http_mocks.createRequest({
      method: 'POST',
      url: '/',
    })

    response.on('end', function() {
      // POST method should not exist.
      // This part of the code should never execute.

      console.log(response);
      done(new Error("Received a response"))
    })

    controller.index(request, response, function() {
      done()
    })
  })

  
})
