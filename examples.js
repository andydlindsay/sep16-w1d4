const name = 'Andy';
const age = 38;
const awake = false;

function greeting(text2) {
  const output = `hello ${text2}!`;
  console.log(output);
}

// greeting(name);

const doubleIt = function(num) {
  const double = num * 2; // NaN
  return double;
}

const anotherFunc = doubleIt;
const aThirdFn = anotherFunc;
console.log(aThirdFn);
console.log(anotherFunc(99));

// console.log(doubleIt);
