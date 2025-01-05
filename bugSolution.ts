function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(a: number, b: number, operation: string): number {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return NaN; // Return NaN for invalid operation
  }
}

console.log(operate(10, 5, '+')); // Output: 15
console.log(operate(10, 5, '-')); // Output: 5
console.log(operate(10, 5, '*')); // Output: 50
console.log(operate(10, 5, '/')); // Output: 2
console.log(operate(10, 0, '/')); // Throws an error: Cannot divide by zero
console.log(operate(10, 5, '%')); // Output: NaN