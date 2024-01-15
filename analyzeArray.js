function analyzeArray(arrayOfNumbers) {
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