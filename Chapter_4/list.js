function nth(list, num) {
    if(num < 0 || list === null){
        return undefined;
    }else if(num === 0) {
        return list.value;
    }

    return nth(list.rest, num - 1);
}

function prepend(ele, list) {
    let newList = {
        value: ele,
        rest: list
    }

    return newList;
}

function listToArray(list) {
    let i = 0;
    let arr = [];

    while(nth(list,i) !== undefined) {
        arr.push(nth(list,i));

        i++;
    }

    return arr;
}

function arrayToList(values) {
    let list = null;

    for(let i = values.length - 1; i >= 0; i--) {
        let value = values[i];
        list = prepend(value,list);
    }

    return list;
}

let list1 = arrayToList([0,1,2,3,4,5,6,7,8]);
console.log("list1:",list1);
let arr1 = listToArray(list1);
console.log("arr1:",arr1);

console.log("nth:", nth(list1,8));