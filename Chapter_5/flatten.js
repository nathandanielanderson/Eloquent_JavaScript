let arr1 = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];

function flattenArray(array) {
    return array.reduce((a,b) => a.concat(b));
}

let arr2 = flattenArray(arr1);

console.log(arr2);