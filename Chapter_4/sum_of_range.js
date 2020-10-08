function range(start, end, step = 1) {
    let arr = [];
    if(step > 0) {
        for(let i = start; i <= end; i += step) {
            arr.push(i);
        }
    }else {
        for(let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    

    return arr;
}

function sum(arr) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        result += ele;
    }

    return result;
}

