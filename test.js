const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/*   sortDigitNamesByNumericOrder([]) => []
*   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
*   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
*   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
*   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
*/
function sortDigitNamesByNumericOrder(arr) {

    arr.sort((a, b) => nums.indexOf(a) - nums.indexOf(b));
      return arr;
}




console.log(sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) );