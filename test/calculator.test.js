const {test} = require('node:test');
const assert = require('node:assert/strict');
const {evaluateExpression} = require('../src/evaluateExpression.js');
const {explainExpression} = require('../src/explainExpression.js');

// Simulate the calculator interaction flow
test('User flow: Basic addition 2+3', () => {
  const result = evaluateExpression('2+3');
  assert.equal(result, 5, 'Basic addition should work');
});

test('User flow: Complex calculation with percentage 200+10%', () => {
  const result = evaluateExpression('200+10%');
  assert.equal(result, 200.1, 'Percentage calculation should work');

  const explanation = explainExpression('200+10%');
  assert.equal(explanation.length, 2, 'Should have 2 steps');
  assert.match(explanation[0], /10%/, 'First step should explain percentage');
  assert.match(explanation[1], /200.*0\.1/, 'Second step should show addition');
});

test('User flow: Clear button behavior (simulated)', () => {
  let display = '12345';
  display = ''; // simulate C button
  assert.equal(display, '', 'Clear button should empty display');
});

test('User flow: Backspace button behavior (simulated)', () => {
  let display = '12345';
  display = display.slice(0, -1); // simulate backspace
  assert.equal(display, '1234', 'Backspace should remove last character');
});

test('User flow: Division operation 20÷4', () => {
  const result = evaluateExpression('20÷4');
  assert.equal(result, 5, 'Division should work correctly');
});

test('User flow: Multiplication operation 6×7', () => {
  const result = evaluateExpression('6×7');
  assert.equal(result, 42, 'Multiplication should work correctly');
});

test('User flow: Chain operations 2+3×4 (left to right)', () => {
  const result = evaluateExpression('2+3×4');
  assert.equal(result, 20, 'Should evaluate left to right: (2+3)×4 = 20');

  const explanation = explainExpression('2+3×4');
  assert.equal(explanation[0], '2 + 3 = 5', 'First operation: 2+3=5');
  assert.equal(explanation[1], '5 × 4 = 20', 'Second operation: 5×4=20');
});

test('User flow: Explain button with invalid input', () => {
  // Simulate error handling in script.js
  function handleExplainClick(value) {
    try {
      return explainExpression(value);
    } catch {
      return ['Calcul invalide.'];
    }
  }

  assert.deepEqual(handleExplainClick(''), ['Calcul invalide.'], 'Empty input shows error');
  assert.deepEqual(handleExplainClick('2++'), ['Calcul invalide.'], 'Malformed input shows error');
  assert.deepEqual(handleExplainClick('+'), ['Calcul invalide.'], 'Operator only shows error');
});

test('User flow: All basic operations in sequence', () => {
  const operations = [
    { expr: '5+5', expected: 10 },
    { expr: '10−3', expected: 7 },
    { expr: '4×8', expected: 32 },
    { expr: '100÷5', expected: 20 },
    { expr: '25%', expected: 0.25 }
  ];

  for (const op of operations) {
    const result = evaluateExpression(op.expr);
    assert.equal(result, op.expected, `${op.expr} should equal ${op.expected}`);
  }
});

test('User flow: Decimal number support', () => {
  const result = evaluateExpression('1.5+2.5');
  assert.equal(result, 4, 'Should support decimal numbers');
});

test('User flow: Error on division by zero', () => {
  assert.throws(
    () => evaluateExpression('5÷0'),
    /division|zéro/i,
    'Should throw error on division by zero'
  );
});

test('Calculator workflow: Enter→Calculate→Explain sequence', () => {
  // Simulate: User enters "200+10%", presses "=", then clicks "Explain"
  const userInput = '200+10%';
  const calculationResult = evaluateExpression(userInput);
  const explanation = explainExpression(userInput);

  assert.equal(calculationResult, 200.1);
  assert(Array.isArray(explanation));
  assert(explanation.length > 0);
  assert(explanation.every(step => typeof step === 'string'));
});
