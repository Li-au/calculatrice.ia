const {test} = require('node:test');
const assert = require('node:assert/strict');
const {explainExpression} = require('../src/explainExpression.js');

test('explainExpression breaks down a simple addition', () => {
  assert.deepEqual(explainExpression('2+3'), ['2 + 3 = 5']);
});

test('explainExpression breaks down a chain of operations left to right', () => {
  assert.deepEqual(explainExpression('2+3×4'), ['2 + 3 = 5', '5 × 4 = 20']);
});

test('explainExpression explains a standalone percentage', () => {
  assert.deepEqual(explainExpression('50%'), ['50% = 0.5']);
});

test('explainExpression explains a percentage within a chain', () => {
  assert.deepEqual(explainExpression('200+10%'), ['10% = 0.1', '200 + 0.1 = 200.1']);
});

test('explainExpression throws on a malformed expression, like evaluateExpression', () => {
  assert.throws(() => explainExpression('2++'), /invalide|invalid/i);
});

test('explainExpression throws on an empty expression', () => {
  assert.throws(() => explainExpression(''), /invalide|invalid/i);
});
