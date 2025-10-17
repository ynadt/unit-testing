import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../utils/usersListUtils.js';

describe('usersListUtils', function() {
  const users = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];

  describe('filterUsersByAge()', function() {
    it('filters users within the specified age range', function() {
      const result = filterUsersByAge(users, 26, 34);
      expect(result).to.deep.equal([{ id: 2, name: 'Bob', age: 30, email: 'bob@example.com' }]);
    });

    it('returns an empty array when no users match', function() {
      const result = filterUsersByAge(users, 40, 50);
      expect(result).to.deep.equal([]);
    });

    it('handles boundary ages correctly', function() {
      const result = filterUsersByAge(users, 25, 30);
      expect(result.map(u => u.name)).to.deep.equal(['Alice', 'Bob']);
    });

    it('throws an error if users is not an array', function() {
      expect(() => filterUsersByAge('notArray', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName()', function() {
    it('sorts users alphabetically by name', function() {
      const shuffled = [users[2], users[0], users[1]]; // Charlie, Alice, Bob
      const result = sortUsersByName(shuffled);
      expect(result.map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    });

    it('does not mutate the original array', function() {
      const copy = [...users];
      sortUsersByName(copy);
      expect(copy).to.deep.equal(users);
    });

    it('throws an error if users is not an array', function() {
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
    });
  });

  describe('findUserById()', function() {
    it('finds a user by existing ID', function() {
      const result = findUserById(users, 2);
      expect(result).to.deep.equal(users[1]);
    });

    it('returns null if user not found', function() {
      const result = findUserById(users, 99);
      expect(result).to.equal(null);
    });

    it('throws an error if users is not an array', function() {
      expect(() => findUserById({}, 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken()', function() {
    it('returns true if email exists in list', function() {
      expect(isEmailTaken(users, 'bob@example.com')).to.be.true;
    });

    it('returns false if email does not exist', function() {
      expect(isEmailTaken(users, 'unknown@example.com')).to.be.false;
    });

    it('throws an error if users is not an array', function() {
      expect(() => isEmailTaken('notArray', 'test@example.com')).to.throw('Users must be an array');
    });
  });
});
