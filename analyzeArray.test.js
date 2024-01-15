const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('returns average for an array of numbers', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4, 5]);

    expect(analysisResult.average).toBe(3);
  });

  test('returns smallest number in array', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4, 5]);

    expect(analysisResult.min).toBe(1);
  });

  test('returns largest number in array', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4, 5]);

    expect(analysisResult.max).toBe(5);
  });

  test('returns length of array', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4, 5]);

    expect(analysisResult.length).toBe(5);
  });
});

describe('Empty array', () => {
  test('average returns null', () => {
    const analysisResult = analyzeArray([]);

    expect(analysisResult.average).toBe(null);
  });

  test('min returns null', () => {
    const analysisResult = analyzeArray([]);

    expect(analysisResult.min).toBe(null);
  });

  test('max returns null', () => {
    const analysisResult = analyzeArray([]);

    expect(analysisResult.max).toBe(null);
  });

  test('length returns 0', () => {
    const analysisResult = analyzeArray([]);

    expect(analysisResult.length).toBe(0);
  });
});
