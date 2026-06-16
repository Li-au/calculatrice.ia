const TOKEN_PATTERN = /(\d+\.?\d*|[+−×÷%])/g;

/**
 * @param {string} expression A calculator expression built from digits and
 *     the operators + − × ÷ %, e.g. "200+10%".
 * @return {Array<string>} Human-readable steps breaking down how the
 *     expression is evaluated, in the same order and with the same
 *     semantics as evaluateExpression (left to right, no operator
 *     precedence, % divides the preceding number by 100).
 * @throws {Error} If the expression is malformed or divides by zero.
 */
function explainExpression(expression) {
  const tokens = (expression.match(TOKEN_PATTERN)) || [];
  if (tokens.length === 0) {
    throw new Error('Expression invalide');
  }

  const steps = [];
  const withPercentagesApplied = [];
  for (const token of tokens) {
    if (token === '%') {
      const previous = withPercentagesApplied.pop();
      if (previous === undefined || isOperator(previous)) {
        throw new Error('Expression invalide');
      }
      const percentValue = Number(previous) / 100;
      steps.push(`${previous}% = ${percentValue}`);
      withPercentagesApplied.push(String(percentValue));
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
    const newResult = applyOperator(result, operator, Number(operand));
    steps.push(`${result} ${operator} ${operand} = ${newResult}`);
    result = newResult;
  }

  return steps;
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
  module.exports = {explainExpression};
}
