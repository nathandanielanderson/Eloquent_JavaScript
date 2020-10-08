function everyLoop(array, test) {
    for(let ele in array) {
        if(!test(ele)) {
            return false
        }
    }

    return true;
}

function everySome(array, test) {
    if(!array.some(test)) {
        return false;
    }

    return true;
}

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,4,6,8,10,12];

console.log("arr1, Loop :",everyLoop(arr1, e => e % 2 === 0));
console.log("arr2, Loop :",everyLoop(arr2, e => e % 2 === 0));
console.log("arr1, Some :",everySome(arr1, e => e % 2 === 0));
console.log("arr2, Some :",everySome(arr2, e => e % 2 === 0));