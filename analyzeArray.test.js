const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  describe('Array of numbers', () => {
    const numbersArray = [1, 2, 3, 4, 5];
    const analysisResult = analyzeArray(numbersArray);

    test('returns average', () => {
      expect(analysisResult.average).toBe(3);
    });

    test('returns smallest number', () => {
      expect(analysisResult.min).toBe(1);
    });

    test('returns largest number', () => {
      expect(analysisResult.max).toBe(5);
    });

    test('returns length', () => {
      expect(analysisResult.length).toBe(numbersArray.length);
    });
  });

  describe('Empty array', () => {
    const emptyArray = [];
    const analysisResult = analyzeArray(emptyArray);

    test('average returns null', () => {
      expect(analysisResult.average).toBe(null);
    });

    test('min returns null', () => {
      expect(analysisResult.min).toBe(null);
    });

    test('max returns null', () => {
      expect(analysisResult.max).toBe(null);
    });

    test('length returns 0', () => {
      expect(analysisResult.length).toBe(emptyArray.length);
    });
  });

  describe('Not an array', () => {
    test('throws an error for non-array input', () => {
      // Test with a string input
      expect(() => analyzeArray('not an array')).toThrow(
        'Input must be an array of numbers'
      );

      // Test with an object input
      expect(() => analyzeArray({ key: 'value' })).toThrow(
        'Input must be an array of numbers'
      );

      // Test with a number input
      expect(() => analyzeArray(42)).toThrow(
        'Input must be an array of numbers'
      );
    });
  });
});
