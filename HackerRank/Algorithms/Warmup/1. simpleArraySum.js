const simpleArraySum = (arr) => {
  let result = arr.reduce((accum, num) => {
    return accum + num;
  }, 0);
  console.log(result);
};

simpleArraySum([1, 2, 3]);

// function simpleArraySum(arr) {
//   let arrSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
//   }
//   console.log(arrSum);
// }

// simpleArraySum([1, 2, 3]);
