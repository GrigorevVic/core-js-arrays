//   isValueEqualsIndex([0, 1, 2, 3, 4]) => true
//    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
//    isValueEqualsIndex([10, 20, 30, 40, 50]) => false

function isValueEqualsIndex(arr) {
 return arr.some((elem) => arr.indexOf(elem) === elem);
}

console.log(isValueEqualsIndex([10, 20, 30, 40, 50]));