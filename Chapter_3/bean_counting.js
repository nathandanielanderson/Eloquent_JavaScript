function countChar(str, char) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        let strChar = str[i];
        if(strChar === char) {
            count++;
        } 
    }

    return count;
}

function countBs(str) {
    return countChar(str, "B");
}

console.log(countBs("BaesdfasfBafssBaf"));