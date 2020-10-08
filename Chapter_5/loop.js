function loop(value, testFunction, updateFunction, bodyFunction) {
    let current = value;

    while(testFunction(current)) {
        bodyFunction(current);
        current  = updateFunction(current);
    }
}

loop(0,i => i < 10, i => i + 1, i => console.log(`The current value is ${i}`));