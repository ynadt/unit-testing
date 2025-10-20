import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('stringUtils', function() {
  describe('capitalize()', function() {
    it('capitalizes the first letter of a word', function() {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('handles a single-letter string', function() {
      expect(capitalize('h')).to.equal('H');
    });

    it('leaves already capitalized strings unchanged', function() {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    it('handles empty string gracefully', function() {
      expect(capitalize('')).to.equal('');
    });

    it('throws an error if input is not a string', function() {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString()', function() {
    it('reverses a regular string', function() {
      expect(reverseString('hello')).to.equal('olleh');
    });

    it('reverses a single character', function() {
      expect(reverseString('a')).to.equal('a');
    });

    it('reverses an empty string', function() {
      expect(reverseString('')).to.equal('');
    });

    it('throws an error if input is not a string', function() {
      expect(() => reverseString(['h', 'i'])).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome()', function() {
    it('returns true for a palindrome word', function() {
      expect(isPalindrome('level')).to.be.true;
    });

    it('returns false for a non-palindrome word', function() {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('is case sensitive (e.g., "Level" is not equal to "level")', function() {
      expect(isPalindrome('Level')).to.be.false;
    });

    it('returns true for an empty string (edge case)', function() {
      expect(isPalindrome('')).to.be.true;
    });

    it('throws an error if input is not a string', function() {
      expect(() => isPalindrome(null)).to.throw('Input must be a string');
    });
  });
});
