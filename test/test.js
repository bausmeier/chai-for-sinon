var sinon = require('sinon'),
    expect = require('../SinonAssertions').expect;

suite('Sinon assertions', function() {
  
  test('calledOnce', function() {
    var stub = sinon.stub();
    stub();
    expect(stub).to.be.calledOnce();
  });
  
  test('not calledOnce', function() {
    var stub = sinon.stub();
    expect(stub).not.to.be.calledOnce();
  });
  
  test('calledWith', function() {
    var stub = sinon.stub();
    var arg = 'test';
    stub(arg);
    expect(stub).to.be.calledWith(arg);
  });
  
  test('not calledWith', function() {
    var stub = sinon.stub();
    var arg = {
    	a: 1
    };
    stub({a: 1, b: 2});
    expect(stub).not.to.be.calledWith(arg);
  });
  
  test('calledWithMatch', function() {
    var stub = sinon.stub();
    var expected = {
    	a: 1
    };
    stub({a: 1, b: 2});
    expect(stub).to.be.calledWithMatch(expected);
  });
  
  test('not calledWithMatch', function() {
    var stub = sinon.stub();
    var expected = {
    	a: 1,
      b: 2
    };
    stub({a: 1});
    expect(stub).not.to.be.calledWithMatch(expected);
  });
  
  test('thrown', function() {
    var stub = sinon.stub().throws();
    try {
      stub();
    } catch (err) {
      // Squash
    }
    expect(stub).to.have.thrown();
  });
  
  test('not thrown', function() {
    var stub = sinon.stub();
    stub();
    expect(stub).not.to.have.thrown();
  });
});