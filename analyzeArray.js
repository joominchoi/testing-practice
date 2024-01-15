function analyzeArray(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error('Input must be an array of numbers');
  }

  if (arrayOfNumbers.length === 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };
  }

  const sum = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
  const average = sum / arrayOfNumbers.length;
  const min = Math.min(...arrayOfNumbers)
  const max = Math.max(...arrayOfNumbers)

  return {
    average: average,
    min: min,
    max: max,
    length: arrayOfNumbers.length
  }
}

module.exports = analyzeArray;