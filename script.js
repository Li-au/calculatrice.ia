const display = document.getElementById('display');
const wrapper = document.getElementById('calculator-wrapper');
const keypad = document.getElementById('keypad');
const explainButton = document.getElementById('explain-button');
const explanation = document.getElementById('explanation');
const modeButton = document.getElementById('mode-button');
const scientificButtons = document.querySelectorAll('.sci-btn');

let isScientificMode = false;

function openKeypad() {
  keypad.classList.add('open');
}

function closeKeypad() {
  keypad.classList.remove('open');
}

display.addEventListener('focus', openKeypad);
display.addEventListener('click', openKeypad);

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

// Mode scientifique
function toggleScientificMode() {
  isScientificMode = !isScientificMode;

  scientificButtons.forEach(btn => {
    btn.hidden = !isScientificMode;
  });

  modeButton.classList.toggle('active', isScientificMode);
  modeButton.textContent = isScientificMode ? 'Mode Normal' : 'Mode Scientifique';
}

modeButton.addEventListener('click', toggleScientificMode);

// Handle scientific function buttons
document.addEventListener('click', (event) => {
  const btn = event.target;

  if (btn.classList.contains('sci-btn-sin')) {
    try {
      const angle = Number(display.value);
      display.value = String(sin(angle));
    } catch {
      display.value = 'Erreur';
    }
  } else if (btn.classList.contains('sci-btn-cos')) {
    try {
      const angle = Number(display.value);
      display.value = String(cos(angle));
    } catch {
      display.value = 'Erreur';
    }
  } else if (btn.classList.contains('sci-btn-tan')) {
    try {
      const angle = Number(display.value);
      display.value = String(tan(angle));
    } catch {
      display.value = 'Erreur';
    }
  } else if (btn.classList.contains('sci-btn-sqrt')) {
    try {
      const value = Number(display.value);
      display.value = String(sqrt(value));
    } catch {
      display.value = 'Erreur';
    }
  } else if (btn.classList.contains('sci-btn-log')) {
    try {
      const value = Number(display.value);
      display.value = String(log(value));
    } catch {
      display.value = 'Erreur';
    }
  } else if (btn.classList.contains('sci-btn-ln')) {
    try {
      const value = Number(display.value);
      display.value = String(ln(value));
    } catch {
      display.value = 'Erreur';
    }
  } else if (btn.classList.contains('sci-btn-pow')) {
    display.value += '^';
  } else if (btn.classList.contains('sci-btn-pi')) {
    display.value += String(Math.PI);
  }
});
