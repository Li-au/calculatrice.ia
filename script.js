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
