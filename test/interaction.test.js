const {test} = require('node:test');
const assert = require('node:assert/strict');
const {JSDOM} = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');

// Helper to create DOM with all scripts loaded
function createDOM() {
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');

  const dom = new JSDOM(html, {
    url: 'file:///index.html',
    runScripts: 'dangerously',
    resources: 'usable'
  });

  const {window} = dom;
  const {document} = window;

  // Load evaluateExpression
  const evalPath = path.join(__dirname, '..', 'src', 'evaluateExpression.js');
  const evalCode = fs.readFileSync(evalPath, 'utf-8');
  window.eval(evalCode);

  // Load explainExpression
  const explainPath = path.join(__dirname, '..', 'src', 'explainExpression.js');
  const explainCode = fs.readFileSync(explainPath, 'utf-8');
  window.eval(explainCode);

  // Load main script
  const scriptPath = path.join(__dirname, '..', 'script.js');
  const scriptCode = fs.readFileSync(scriptPath, 'utf-8');
  window.eval(scriptCode);

  return {dom, window, document};
}

test('Interaction: Simulate clicking number button "2"', () => {
  const {document, window} = createDOM();

  const display = document.getElementById('display');
  const button2 = document.querySelector('button[data-key="2"]');

  assert(button2, 'Button "2" should exist');
  assert.equal(display.value, '', 'Display should start empty');

  // Simulate click
  button2.click();

  assert.equal(display.value, '2', 'Display should show "2" after clicking button 2');
});

test('Interaction: Simulate entering "2+3"', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const btn2 = document.querySelector('button[data-key="2"]');
  const btnPlus = document.querySelector('button[data-key="+"]');
  const btn3 = document.querySelector('button[data-key="3"]');

  btn2.click();
  btnPlus.click();
  btn3.click();

  assert.equal(display.value, '2+3', 'Display should show "2+3"');
});

test('Interaction: Simulate pressing equals button', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const btn2 = document.querySelector('button[data-key="2"]');
  const btnPlus = document.querySelector('button[data-key="+"]');
  const btn3 = document.querySelector('button[data-key="3"]');
  const btnEquals = document.querySelector('button[data-key="="]');

  btn2.click();
  btnPlus.click();
  btn3.click();
  btnEquals.click();

  assert.equal(display.value, '5', 'Display should show result "5"');
});

test('Interaction: Simulate pressing Clear button', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const btn2 = document.querySelector('button[data-key="2"]');
  const btnClear = document.querySelector('button[data-key="C"]');

  btn2.click();
  assert.equal(display.value, '2');

  btnClear.click();

  assert.equal(display.value, '', 'Display should be empty after Clear');
});

test('Interaction: Simulate pressing Backspace button', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const btn1 = document.querySelector('button[data-key="1"]');
  const btn2 = document.querySelector('button[data-key="2"]');
  const btn3 = document.querySelector('button[data-key="3"]');
  const btnBackspace = document.querySelector('button[data-key="backspace"]');

  btn1.click();
  btn2.click();
  btn3.click();
  assert.equal(display.value, '123');

  btnBackspace.click();

  assert.equal(display.value, '12', 'Display should remove last character after Backspace');
});

test('Interaction: Simulate percentage calculation 200+10%', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');

  // Directly set display value to avoid button finding issues
  display.value = '';
  const keySequence = ['2', '0', '0', '+', '1', '0', '%', '='];

  for (const key of keySequence) {
    const btn = document.querySelector(`button[data-key="${key}"]`);
    if (btn) {
      btn.click();
    }
  }

  assert.equal(display.value, '200.1', 'Display should show result "200.1"');
});

test('Interaction: Explain button shows explanation text', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const explanation = document.getElementById('explanation');
  const explainBtn = document.getElementById('explain-button');

  // First, set up a calculation
  display.value = '2+3';

  // Click explain button
  explainBtn.click();

  assert(!explanation.hidden, 'Explanation should be visible');
  assert(explanation.textContent.length > 0, 'Explanation should have content');
  assert(explanation.textContent.includes('5'), 'Explanation should contain result');
});

test('Interaction: Explain button with error shows error message', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const explanation = document.getElementById('explanation');
  const explainBtn = document.getElementById('explain-button');

  // Empty calculation
  display.value = '';

  explainBtn.click();

  assert(!explanation.hidden, 'Explanation should be visible');
  assert(explanation.textContent.includes('invalide'), 'Should show error message for invalid input');
});

test('Interaction: Chain operation 2+3×4', () => {
  const {document} = createDOM();

  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button[data-key]');

  // Find and click buttons: 2 + 3 × 4 =
  const keySequence = ['2', '+', '3', '×', '4', '='];

  for (const key of keySequence) {
    const btn = document.querySelector(`button[data-key="${key}"]`);
    if (btn) {
      btn.click();
    }
  }

  assert.equal(display.value, '20', 'Chain operation 2+3×4 should equal 20 (left to right)');
});

test('Interaction: Keypad closes when clicking outside', () => {
  const {document, window} = createDOM();

  const keypad = document.getElementById('keypad');
  const wrapper = document.getElementById('calculator-wrapper');
  const display = document.getElementById('display');

  // Open keypad
  display.click();
  assert(keypad.classList.contains('open'), 'Keypad should be open after display click');

  // Simulate clicking outside
  const outsideEvent = new window.MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  window.document.body.dispatchEvent(outsideEvent);

  assert(!keypad.classList.contains('open'), 'Keypad should close when clicking outside');
});

test('Interaction: All special operators work', () => {
  const {document} = createDOM();

  const testCases = [
    { sequence: '5+3=', expected: '8' },
    { sequence: '10−4=', expected: '6' },
    { sequence: '6×7=', expected: '42' },
    { sequence: '20÷4=', expected: '5' },
    { sequence: '50%=', expected: '0.5' }
  ];

  for (const testCase of testCases) {
    const display = document.getElementById('display');
    display.value = '';
    const btnClear = document.querySelector('button[data-key="C"]');
    btnClear.click();

    // Click buttons in sequence
    for (const char of testCase.sequence) {
      const btn = document.querySelector(`button[data-key="${char}"]`);
      if (btn) {
        btn.click();
      }
    }

    assert.equal(display.value, testCase.expected, `Expected ${testCase.expected} for ${testCase.sequence}, got ${display.value}`);
  }
});
