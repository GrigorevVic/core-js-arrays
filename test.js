/*   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
*   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
*   swapHeadAndTail([ 1 ]) => [ 1 ]
*   swapHeadAndTail([]) => []
*
*/
function swapHeadAndTail(arr) {
    if (arr.length % 2 === 0) {
        return arr.splice(arr.length / 2).concat(arr);
    } 
    const middle = arr.splice(Math.floor(arr.length / 2), 1);
    return arr.splice(arr.length / 2).concat(middle).concat(arr);
    
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5]));