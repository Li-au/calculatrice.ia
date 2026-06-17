const {test} = require('node:test');
const assert = require('node:assert/strict');
const {JSDOM} = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');

// Load HTML
const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

test('DOM: Page loads without errors', () => {
  const dom = new JSDOM(html, {
    url: 'file:///index.html'
  });

  assert(dom.window, 'Window should be created');
  assert(dom.window.document, 'Document should be created');
});

test('DOM: All required elements exist', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const display = document.getElementById('display');
  const keypad = document.getElementById('keypad');
  const explainButton = document.getElementById('explain-button');
  const explanation = document.getElementById('explanation');
  const calculatorWrapper = document.getElementById('calculator-wrapper');

  assert(display, 'Display element must exist');
  assert(keypad, 'Keypad element must exist');
  assert(explainButton, 'Explain button must exist');
  assert(explanation, 'Explanation element must exist');
  assert(calculatorWrapper, 'Calculator wrapper must exist');
});

test('DOM: Display element has correct attributes', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const display = document.getElementById('display');

  assert.equal(display.type, 'text', 'Display should be text input');
  assert(display.readOnly, 'Display should be readonly');
  assert(display.tabIndex === 0 || display.tabIndex === -1, 'Display should be focusable');
});

test('DOM: Keypad has correct button count', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const keypad = document.getElementById('keypad');
  const buttons = keypad.querySelectorAll('button');

  assert(buttons.length > 0, 'Keypad should have buttons');
  // 19 regular buttons + 6 scientific buttons + 1 dot + 1 explain = 27
  assert(buttons.length >= 27, `Expected at least 27 buttons, found ${buttons.length}`);
});

test('DOM: Number and operator buttons have data-key attributes', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const keypad = document.getElementById('keypad');
  const buttons = keypad.querySelectorAll('button[data-key]');

  // Should have 18 buttons with data-key (Explain button is separate)
  assert(buttons.length >= 18, `Should have at least 18 buttons with data-key, found ${buttons.length}`);

  // Verify specific buttons exist
  const requiredKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '−', '×', '÷', '%', 'C', '='];
  for (const key of requiredKeys) {
    const btn = keypad.querySelector(`button[data-key="${key}"]`);
    assert(btn, `Button with data-key="${key}" should exist`);
  }
});

test('DOM: Scripts are referenced in HTML', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const scripts = document.querySelectorAll('script[src]');
  const scriptPaths = Array.from(scripts).map(s => s.getAttribute('src'));

  assert(scriptPaths.includes('src/evaluateExpression.js'), 'evaluateExpression script missing');
  assert(scriptPaths.includes('src/explainExpression.js'), 'explainExpression script missing');
  assert(scriptPaths.includes('script.js'), 'main script missing');
});

test('DOM: Styles are applied', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const style = document.querySelector('link[rel="stylesheet"]');
  assert(style, 'CSS link should exist');
  assert.equal(style.getAttribute('href'), 'style.css');
});

test('DOM: Explain button has correct class and text', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const explainButton = document.getElementById('explain-button');

  assert(explainButton.classList.contains('key-explain'), 'Button should have key-explain class');
  assert.equal(explainButton.textContent.trim(), 'Expliquer');
});

test('DOM: Explanation div is hidden by default', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const explanation = document.getElementById('explanation');

  assert(explanation.hidden, 'Explanation should be hidden by default');
});

test('DOM: Special operators are in buttons', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const keypad = document.getElementById('keypad');
  const buttons = Array.from(keypad.querySelectorAll('button'));
  const buttonTexts = buttons.map(b => b.dataset.key || b.textContent.trim());

  const requiredKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '−', '×', '÷', '%', 'C', '='];

  for (const key of requiredKeys) {
    assert(buttonTexts.includes(key), `Button for "${key}" not found`);
  }
});

test('DOM: Layout structure is correct', () => {
  const dom = new JSDOM(html);
  const {document} = dom.window;

  const wrapper = document.getElementById('calculator-wrapper');
  const searchBar = wrapper.querySelector('.search-bar');
  const keypad = wrapper.querySelector('#keypad');
  const explanation = wrapper.querySelector('#explanation');

  assert(searchBar, 'Search bar container should exist');
  assert(keypad, 'Keypad should be in wrapper');
  assert(explanation, 'Explanation should be in wrapper');
});
