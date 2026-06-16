const TOKEN_PATTERN = /(\d+\.?\d*|[+−×÷%])/g;

/**
 * @param {string} expression A calculator expression built from digits and
 *     the operators + − × ÷ %, e.g. "200+10%".
 * @return {number} The result, evaluated left to right (no operator
 *     precedence), with `%` converting the number immediately before it
 *     into a percentage (divided by 100) before the chain continues.
 * @throws {Error} If the expression is malformed or divides by zero.
 */
function evaluateExpression(expression) {
  const tokens = (expression.match(TOKEN_PATTERN)) || [];
  if (tokens.length === 0) {
    throw new Error('Expression invalide');
  }

  const withPercentagesApplied = [];
  for (const token of tokens) {
    if (token === '%') {
      const previous = withPercentagesApplied.pop();
      if (previous === undefined || isOperator(previous)) {
        throw new Error('Expression invalide');
      }
      withPercentagesApplied.push(String(Number(previous) / 100));
    } else {
      withPercentagesApplied.push(token);
    }
  }

  if (withPercentagesApplied.length === 0 || isOperator(withPercentagesApplied[0]) ||
      isOperator(withPercentagesApplied[withPercentagesApplied.length - 1])) {
    throw new Error('Expression invalide');
  }

  let result = Number(withPercentagesApplied[0]);
  for (let i = 1; i < withPercentagesApplied.length; i += 2) {
    const operator = withPercentagesApplied[i];
    const operand = withPercentagesApplied[i + 1];
    if (!isOperator(operator) || operand === undefined || isOperator(operand)) {
      throw new Error('Expression invalide');
    }
    result = applyOperator(result, operator, Number(operand));
  }

  return result;
}

function isOperator(token) {
  return token === '+' || token === '−' || token === '×' || token === '÷';
}

function applyOperator(left, operator, right) {
  switch (operator) {
    case '+':
      return left + right;
    case '−':
      return left - right;
    case '×':
      return left * right;
    case '÷':
      if (right === 0) {
        throw new Error('Division par zéro');
      }
      return left / right;
    default:
      throw new Error('Expression invalide');
  }
}

if (typeof module !== 'undefined') {
  module.exports = {evaluateExpression};
}
