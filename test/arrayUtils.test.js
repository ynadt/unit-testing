import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', function() {
  describe('findMax()', function() {
    it('returns the maximum number in an array', function() {
      expect(findMax([1, 5, 3, 9])).to.equal(9);
    });

    it('handles negative numbers', function() {
      expect(findMax([-10, -5, -20])).to.equal(-5);
    });

    it('handles single-element arrays', function() {
      expect(findMax([42])).to.equal(42);
    });

    it('returns -Infinity for empty array', function() {
      expect(findMax([])).to.equal(-Infinity);
    });

    it('throws an error if input is not an array', function() {
      expect(() => findMax('abc')).to.throw('Input must be an array');
    });
  });

  describe('findMin()', function() {
    it('returns the minimum number in an array', function() {
      expect(findMin([1, 5, 3, 9])).to.equal(1);
    });

    it('handles negative numbers', function() {
      expect(findMin([-10, -5, -20])).to.equal(-20);
    });

    it('handles single-element arrays', function() {
      expect(findMin([42])).to.equal(42);
    });

    it('returns Infinity for empty array', function() {
      expect(findMin([])).to.equal(Infinity);
    });

    it('throws an error if input is not an array', function() {
      expect(() => findMin(null)).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates()', function() {
    it('removes duplicates from a numeric array', function() {
      expect(removeDuplicates([1, 2, 2, 3, 1])).to.deep.equal([1, 2, 3]);
    });

    it('removes duplicates from a string array', function() {
      expect(removeDuplicates(['a', 'b', 'a'])).to.deep.equal(['a', 'b']);
    });

    it('returns empty array when input is empty', function() {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('throws an error if input is not an array', function() {
      expect(() => removeDuplicates(123)).to.throw('Input must be an array');
    });
  });
});
