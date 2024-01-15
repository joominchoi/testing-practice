const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('returns average for an array of numbers', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4, 5]);

    expect(analysisResult.average).toBe(3);
  });

  test('returns length of array', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4 ,5]);

    expect(analysisResult.length).toBe(5);
  })
});

