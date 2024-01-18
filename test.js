/*    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
*    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
*    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
*/
function getIndicesOfOddNumbers(numbers) {
    const res = [];
    numbers.filter(function (el, index) {
        if (el % 2 !== 0) {
            res.push(index);
        }
    });
    return res;
}

console.log(getIndicesOfOddNumbers([11, 22, 33, 44, 55]))