const { multiplesOf } = require('./multiples');

describe('create a function to grab multiples', () => {
  it('returns multiple numbers of', () => {
    const newArray = multiplesOf(33);
    expect(newArray).toEqual([33, 66, 99]);
  });
});

