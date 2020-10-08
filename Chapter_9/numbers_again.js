let numbers = /^[+-]?[.]?\d+[.e]?[+-]?(\d+)*$/;

console.log(numbers.test("+5"));
console.log(numbers.test("5."));
console.log(numbers.test("5.102"));
console.log(numbers.test(".5"));
console.log(numbers.test("5e10"));
console.log(numbers.test("5e-10"));
console.log(numbers.test("-5"));
console.log(numbers.test("-.0054"));

