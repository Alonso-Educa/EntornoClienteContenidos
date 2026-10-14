"use strict";

let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];

array.forEach((element) => {
    // también se puede hacer con includes
  if (outputArray.indexOf(element) == -1) {
    outputArray.push(element);
  }
});
console.log("Forma manual:");
console.log(outputArray);

// Array.from(array): Crea un nuevo Array a partir de un objeto iterable
let outputArray2 = Array.from(new Set(array));
console.log("\nUsando Array.from() y Set:");
console.log(outputArray2);