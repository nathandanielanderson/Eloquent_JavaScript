function isEven(num) {
    if(num < 0){
        num *= -1;
    }
    if(num === 0){
        return true;
    }else if(num === 1) {
        return false;
    }else{
        return isEven(num - 2);
    }
}

console.log(isEven(-1));
console.log(isEven(7));
console.log(isEven(-6));
console.log(isEven(1));
