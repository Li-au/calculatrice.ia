const display = document.getElementById('display');
const wrapper = document.getElementById('calculator-wrapper');
const keypad = document.getElementById('keypad');

function openKeypad() {
  keypad.classList.add('open');
}

function closeKeypad() {
  keypad.classList.remove('open');
}

display.addEventListener('focus', openKeypad);

document.addEventListener('mousedown', (event) => {
  if (!wrapper.contains(event.target)) {
    closeKeypad();
  }
});

function handleKeyPress(key) {
  if (key === 'C') {
    display.value = '';
    return;
  }
  if (key === 'backspace') {
    display.value = display.value.slice(0, -1);
    return;
  }
  if (key === '=') {
    try {
      display.value = String(evaluateExpression(display.value));
    } catch {
      display.value = 'Erreur';
    }
    return;
  }
  display.value += key;
}

keypad.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) {
    handleKeyPress(button.dataset.key);
  }
});
