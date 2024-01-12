function capitalize(str) {
  const firstLetter = str.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = str.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;

  return capitalizedWord;
}
module.exports = capitalize;
