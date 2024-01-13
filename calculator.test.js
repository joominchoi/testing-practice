const calculator = require('./calculator');

describe('Addition', () => {
  test('two positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('a positive and a negative number', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  });

  test('two negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test('a number to zero', () => {
    expect(calculator.add(0, 2)).toBe(2);
  });

  test('zero to zero', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('two large numbers', () => {
    expect(calculator.add(12345, 6789)).toBe(19134);
  });

  test('two large negative numbers', () => {
    expect(calculator.add(-12345, -6789)).toBe(-19134);
  });

  test('two decimal numbers', () => {
    expect(calculator.add(1.234, 5.6789)).toBe(6.9129);
  });

  test('two negative decimal numbers', () => {
    expect(calculator.add(-1.234, -5.6789)).toBe(-6.9129);
  });
});

describe('Subtraction', () => {
  test('two positive numbers', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  test('a positive and a negative number', () => {
    expect(calculator.subtract(3, -2)).toBe(5);
  });

  test('two negative numbers', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  test('a number from zero', () => {
    expect(calculator.subtract(0, 1)).toBe(-1);
  });

  test('zero from a number', () => {
    expect(calculator.subtract(1, 0)).toBe(1);
  });

  test('two large numbers', () => {
    expect(calculator.subtract(12345, 6789)).toBe(5556);
  });

  test('two large negative numbers', () => {
    expect(calculator.subtract(-12345, -6789)).toBe(-5556);
  });

  test('two decimal numbers', () => {
    expect(calculator.subtract(5.6789, 1.234)).toBe(4.4449);
  });

  test('two negative decimal numbers', () => {
    expect(calculator.subtract(-5.6789, -1.234)).toBe(-4.4449);
  });
});

describe('Division', () => {
  test('two positive numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('a positive and a negative number', () => {
    expect(calculator.divide(4, -2)).toBe(-2);
  });

  test('a negative number and a positive number', () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
  });

  test('two negative numbers', () => {
    expect(calculator.divide(-4, -2)).toBe(2);
  });

  test('zero by a positive number', () => {
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('a positive number by zero', () => {
    expect(calculator.divide(8, 0)).toBe('Cannot divide by zero');
  });

  test('zero by zero', () => {
    expect(calculator.divide(0, 0)).toBe('Cannot divide by zero');
  });

  test('a decimal number by another decimal number', () => {
    expect(calculator.divide(3.6, 1.2)).toBe(3);
  });

  test('a negative decimal number by a positive decimal number', () => {
    expect(calculator.divide(-4.8, 1.2)).toBe(-4);
  });
});
