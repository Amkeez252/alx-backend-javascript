const {describe, it} = require("mocha");
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const assert = require("assert");

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateSpy);
    sinon.assert.calledWithExactly(calculateSpy, 'SUM', 100, 20);

    calculateSpy.restore();
  });
});
