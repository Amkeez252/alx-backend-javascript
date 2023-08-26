const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should calculate the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should calculate the subtraction of two rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should calculate the division of two rounded numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle division by zero and return "Error"', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
