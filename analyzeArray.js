function analyzeArray(input) {
  if (!Array.isArray(input)) {
    throw new Error('Input must be an array of numbers');
  }

  if (input.length === 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };
  }

  if (!areAllNumbers(input)) {
    throw new Error('Input must be an array of only numbers')
  }

  const sum = input.reduce((acc, num) => acc + num, 0);
  const average = sum / input.length;
  const min = Math.min(...input)
  const max = Math.max(...input)

  return {
    average: average,
    min: min,
    max: max,
    length: input.length
  }
}

function areAllNumbers(input) {
  for (const element of input) {
    if (typeof element !== 'number' || isNaN(element)) {
      return false;
    }
  }
  return true;
}

module.exports = analyzeArray;