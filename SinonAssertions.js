var chai = require('chai'),
    Assertion = chai.Assertion;

Assertion.addMethod('calledOnce', function() {
  var obj = this._obj;
  new Assertion(obj.calledOnce).to.exist;
  this.assert(
    obj.calledOnce,
    'expected #{this} to be called once',
    'expected #{this} not to be called once'
  );
});

Assertion.addMethod('calledWith', function() {
  var obj = this._obj;
  new Assertion(obj.calledWith).to.exist;
  this.assert(
    obj.calledWith.apply(obj, arguments),
    'expected #{this} to be called with arguments #{exp}, but got #{act}',
    'expected #{this} not to be called with arguments #{exp}, but got #{act}',
    arguments,
    obj.args
  );
});

Assertion.addMethod('calledWithMatch', function() {
  var obj = this._obj;
  new Assertion(obj.calledWithMatch).to.exist;
  this.assert(
    obj.calledWithMatch.apply(obj, arguments),
    'expected #{this} to be called with arguments matching #{exp}, but got #{act}',
    'expected #{this} not to be called with arguments matching #{exp}, but got #{act}',
    arguments,
    obj.args
  );
});

Assertion.addMethod('thrown', function(arg) {
  var obj = this._obj;
  new Assertion(obj.threw).to.exist;
  this.assert(
    obj.threw(arg),
    'expected #{this} to have thrown',
    'expected #{this} not to have thrown'
  );
});

module.exports = chai;