import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('checkStudentKnowledge', function() {
  it('returns true when all answers are correct', function() {
    const studentAnswers = { q1: 'A', q2: 'B', q3: 'C' };
    const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('returns false when a single answer is incorrect', function() {
    const studentAnswers = { q1: 'A', q2: 'B', q3: 'D' };
    const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('returns false when keys differ in order', function() {
    const studentAnswers = { q1: 'A', q3: 'C', q2: 'B' };
    const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('returns false when lengths differ', function() {
    const studentAnswers = { q1: 'A', q2: 'B' };
    const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('returns false when both objects are empty but logically correct', function() {
    const studentAnswers = {};
    const correctAnswers = {};
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('returns false when answers object contains extra questions', function() {
    const studentAnswers = { q1: 'A', q2: 'B', q3: 'C', q4: 'D' };
    const correctAnswers = { q1: 'A', q2: 'B', q3: 'C' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });
});
