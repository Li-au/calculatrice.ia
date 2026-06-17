/**
 * Scientific functions for the calculator
 * All functions work with radians for trigonometric functions
 */

function sin(x) {
  return Math.sin(x);
}

function cos(x) {
  return Math.cos(x);
}

function tan(x) {
  return Math.tan(x);
}

function sqrt(x) {
  if (x < 0) {
    throw new Error('Racine carrée d\'un nombre négatif');
  }
  return Math.sqrt(x);
}

function log(x) {
  if (x <= 0) {
    throw new Error('Logarithme d\'un nombre ≤ 0');
  }
  return Math.log10(x);
}

function ln(x) {
  if (x <= 0) {
    throw new Error('Logarithme naturel d\'un nombre ≤ 0');
  }
  return Math.log(x);
}

function pow(base, exponent) {
  return Math.pow(base, exponent);
}

function factorial(n) {
  if (n < 0) {
    throw new Error('Factorielle d\'un nombre négatif');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Factorielle d\'un nombre non entier');
  }
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const PI = Math.PI;
const E = Math.E;

if (typeof module !== 'undefined') {
  module.exports = {
    sin, cos, tan, sqrt, log, ln, pow, factorial, PI, E
  };
}
