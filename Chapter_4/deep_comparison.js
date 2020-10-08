function deepEqual(value1, value2) {
    //both values are objects
    if(typeof(value1) === "object" && value1 !== null && typeof(value2) === "object" && value2 !== null) {
       //same number of keys
        if(Object.keys(value1).length !== Object.keys(value2).length) {
            return false;
        }

        for(let k in value1) {
            //contain same keys
            if(value2[k] === undefined) {
                return false;
            }
            //keys contain same values
            if(!deepEqual(value1[k], value2[k])) {
                return false;
            }
        }

    }else {
        //values are equal
        if(value1 !== value2) {
            return false;
        }
    }
    return true;
}
