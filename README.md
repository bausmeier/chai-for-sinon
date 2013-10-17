# Chai for Sinon

It's [Chai](http://chaijs.com) with some added assertions for [Sinon](http://sinonjs.org).

## Usage

Replace `require('chai')` with `require('chai-for-sinon')`.

Example:
```
var chai = require('chai-for-sinon'),
    expect = chai.expect;
```

*or*

Add `require('chai-for-sinon')` after requiring Chai.

Example:
```
var chai = require('chai');
require('chai-for-sinon');
```

## Assertions

The assertions that are added.

### calledOnce()

Assert that the spy/stub/mock function was called once.

Example:
```
expect(stub.method).to.be.calledOnce();
```

### calledWithMatch([arg1[, ...]])

Assert that the spy/stub/mock function was called with arguments matching the ones passed to this function. Each argument will be wrapped in a Sinon matcher.

Example:
```
expect(stub.method).to.be.calledWithMatch({foo: 'bar'}, 'baz');
```