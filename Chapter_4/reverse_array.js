function reverseArray(arr) {
    let newArray = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        let ele = arr[i];
        newArray.push(ele);
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    let midIdx = Math.floor(array.length / 2);
    for(let i = 0; i < midIdx; i++) {
        let temp = array[i];
        let swap = array[array.length - 1 - i];
        array[i] = swap;
        array[array.length - 1 - i] = temp;
    }
    
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]