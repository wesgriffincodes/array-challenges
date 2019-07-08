function multiplesOf(n) {
  const multiples = [];
  for(let i = 1; i <= 100; i++) {
    if(i % n === 0) {
      multiples.push(i);
    }       
  }
  return multiples;
}

console.log(multiplesOf(33));

module.exports = { multiplesOf };


