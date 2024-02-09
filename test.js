

/*   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
*   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
*   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
*/
function getElementByIndices(arr, indices) {
    const res = indices.reduce((acc, el) => {
        let a = acc[el];
        return a;
    }, arr);
 return res;
}



console.log( getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]))



