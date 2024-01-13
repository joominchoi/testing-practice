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
