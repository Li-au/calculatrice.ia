const {test} = require('node:test');
const assert = require('node:assert/strict');
const {evaluateExpression} = require('../src/evaluateExpression.js');

test('evaluateExpression adds two numbers', () => {
  assert.equal(evaluateExpression('2+3'), 5);
});

test('evaluateExpression subtracts two numbers', () => {
  assert.equal(evaluateExpression('10−4'), 6);
});

test('evaluateExpression multiplies two numbers', () => {
  assert.equal(evaluateExpression('6×7'), 42);
});

test('evaluateExpression divides two numbers', () => {
  assert.equal(evaluateExpression('20÷4'), 5);
});

test('evaluateExpression evaluates a chain of operations left to right', () => {
  assert.equal(evaluateExpression('2+3×4'), 20);
});

test('evaluateExpression converts a standalone percentage to its decimal value', () => {
  assert.equal(evaluateExpression('50%'), 0.5);
});

test('evaluateExpression applies a percentage within a chain', () => {
  assert.equal(evaluateExpression('200+10%'), 200.1);
});

test('evaluateExpression handles decimal numbers', () => {
  assert.equal(evaluateExpression('1.5+2.5'), 4);
});

test('evaluateExpression throws on division by zero', () => {
  assert.throws(() => evaluateExpression('5÷0'), /division/i);
});

test('evaluateExpression throws on a malformed expression', () => {
  assert.throws(() => evaluateExpression('2++'), /invalide|invalid/i);
});

test('evaluateExpression throws on an empty expression', () => {
  assert.throws(() => evaluateExpression(''), /invalide|invalid/i);
});
