const { largestProduct } = require('./largest-product');

describe('create a function to create sum of largest 3 in array', () => {
  it('returns sum of big 3', () => {
    const array = [-3, 10, 7, 20, 30];  
    const newArray = largestProduct(array);
    expect(newArray).toEqual(60);
  });
});
