/*     getIdentityMatrix(1)  => [[1]]
*
*     getIdentityMatrix(2) => [[1,0],
*                             [0,1]]
*
*                              [[1,0,0,0,0],
*                              [0,1,0,0,0],
*     getIdentityMatrix(5) =>  [0,0,1,0,0],
*                              [0,0,0,1,0],
*                              [0,0,0,0,1]]
*/
function getIdentityMatrix(n) {
    let elem = [];
    const a = new Array(n).fill(0);
    const b = a.map(() => new Array(n).fill(0));
    return b.map((el, index) => {
    elem = el;
    elem[index] = 1;
    return elem;
    });
  }

console.log(getIdentityMatrix(5))