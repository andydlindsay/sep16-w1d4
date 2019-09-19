const dogs = ['Henry', 'Stormy', 'Fido', 'Dallas', 'Dioji'];

const forEach = function(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

forEach(dogs, (dog, index) => {
  console.log(`my dog is named ${dog} and it's index is ${index}`);
});
