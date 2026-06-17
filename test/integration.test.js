const {test} = require('node:test');
const assert = require('node:assert/strict');
const {evaluateExpression} = require('../src/evaluateExpression.js');
const {explainExpression} = require('../src/explainExpression.js');

// Simulates the error handling in script.js explainButton click handler
function handleExplainClick(displayValue) {
  try {
    return explainExpression(displayValue);
  } catch {
    return ['Calcul invalide.'];
  }
}

test('Task 3.3: Explain button displays breakdown for valid calculation', () => {
  const steps = handleExplainClick('200+10%');
  assert.deepEqual(steps, ['10% = 0.1', '200 + 0.1 = 200.1']);
});

test('Task 3.4: Explain button shows error message for empty input', () => {
  const steps = handleExplainClick('');
  assert.deepEqual(steps, ['Calcul invalide.']);
});

test('Task 3.4: Explain button shows error message for malformed expression', () => {
  const steps = handleExplainClick('2++');
  assert.deepEqual(steps, ['Calcul invalide.']);
});

test('Task 3.4: Explain button shows error message for missing operand', () => {
  const steps = handleExplainClick('200+');
  assert.deepEqual(steps, ['Calcul invalide.']);
});

test('Task 3.4: Explain button shows error message for invalid percentage placement', () => {
  const steps = handleExplainClick('+%');
  assert.deepEqual(steps, ['Calcul invalide.']);
});

test('Task 3.3+3.4: Integration - complex valid calculation', () => {
  const steps = handleExplainClick('2+3×4');
  assert.deepEqual(steps, ['2 + 3 = 5', '5 × 4 = 20']);
});

test('Task 3.3+3.4: Integration - simple operation', () => {
  const steps = handleExplainClick('7÷2');
  assert(steps[0] === '7 ÷ 2 = 3.5');
});
