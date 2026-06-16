const display = document.getElementById('display');
const wrapper = document.getElementById('calculator-wrapper');
const keypad = document.getElementById('keypad');
const explainButton = document.getElementById('explain-button');
const explanation = document.getElementById('explanation');

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

function hideExplanation() {
  explanation.hidden = true;
}

function showExplanation(steps) {
  explanation.innerHTML = steps.map((step) => `<p>${step}</p>`).join('');
  explanation.hidden = false;
}

function handleKeyPress(key) {
  hideExplanation();
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
  if (button && button.dataset.key) {
    handleKeyPress(button.dataset.key);
  }
});

explainButton.addEventListener('click', () => {
  try {
    showExplanation(explainExpression(display.value));
  } catch {
    showExplanation(['Calcul invalide.']);
  }
});
