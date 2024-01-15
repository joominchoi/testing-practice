function analyzeArray(arrayOfNumbers) {
  const sum = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
  const average = sum / arrayOfNumbers.length;

  return {
    average: average,
    length: arrayOfNumbers.length
  }
}

module.exports = analyzeArray;