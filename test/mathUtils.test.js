import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', function() {
  describe('add()', function() {
    it('adds two positive numbers', function() {
      expect(add(2, 3)).to.equal(5);
    });

    it('adds negative and positive numbers', function() {
      expect(add(-5, 10)).to.equal(5);
    });

    it('adds two negative numbers', function() {
      expect(add(-2, -3)).to.equal(-5);
    });

    it('adds zeros', function() {
      expect(add(0, 0)).to.equal(0);
    });
  });

  describe('subtract()', function() {
    it('subtracts two positive numbers', function() {
      expect(subtract(10, 3)).to.equal(7);
    });

    it('subtracts resulting in negative value', function() {
      expect(subtract(3, 5)).to.equal(-2);
    });

    it('handles zeros', function() {
      expect(subtract(0, 5)).to.equal(-5);
    });
  });

  describe('multiply()', function() {
    it('multiplies two positive numbers', function() {
      expect(multiply(4, 5)).to.equal(20);
    });

    it('multiplies with a negative number', function() {
      expect(multiply(-4, 5)).to.equal(-20);
    });

    it('multiplies with zero', function() {
      expect(multiply(10, 0)).to.equal(0);
    });
  });

  describe('divide()', function() {
    it('divides two positive numbers', function() {
      expect(divide(10, 2)).to.equal(5);
    });

    it('divides resulting in a fraction', function() {
      expect(divide(1, 2)).to.equal(0.5);
    });

    it('divides negative numbers correctly', function() {
      expect(divide(-10, 2)).to.equal(-5);
    });

    it('throws error when dividing by zero', function() {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
});
