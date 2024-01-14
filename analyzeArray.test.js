const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('calculates the correct average for an array of numbers', () => {
    const analysisResult = analyzeArray([1, 2, 3, 4, 5]);

    // Check if the calculated average matches the expected average
    expect(analysisResult.average).toBe(3);
  });

  // Add more test cases for min, max, and length if needed
});

