const names = ['Andy', 'Max', 'Sam'];

const higherOrderFunc = function(func) {
  // const callback = function (name) {
  //   func(name);
  // };
  // names.forEach(callback);

  names.forEach((name) => {
    func(name);
  });
}

const name = 'Andy';

const greeting = function(name) {
  console.log(`hello ${name}`);
}

higherOrderFunc(greeting);
