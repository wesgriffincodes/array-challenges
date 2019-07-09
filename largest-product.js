function largestProduct(arr) {
  const positives = arr.sort((a, b) => a - b).filter((num) => num >= 0).slice(-3).reduce((a, b) => a + b);
  return positives;
}

module.exports = { largestProduct };
