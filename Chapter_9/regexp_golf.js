let carCat = /^ca(r|t)$/;

// console.log(carCat.test("cat"));
// console.log(carCat.test("car"));
// console.log(carCat.test("cart"));

let popProp = /^pr?op$/;

// console.log(popProp.test("pop"));
// console.log(popProp.test("prop"));
// console.log(popProp.test("propp"));

let ferretFerryFerrari = /^ferr(et|y|ari)$/;

// console.log(ferretFerryFerrari.test("ferret"));
// console.log(ferretFerryFerrari.test("ferry"));
// console.log(ferretFerryFerrari.test("ferrari"));
// console.log(ferretFerryFerrari.test("ferretari"));

let endsInIOUS = /^(\w+)ious$/;

// console.log(endsInIOUS.test("delicious"));
// console.log(endsInIOUS.test("nutritious"));
// console.log(endsInIOUS.test("fictitious"));
// console.log(endsInIOUS.test("pompous"));
// console.log(endsInIOUS.test("ious"));

let whitespaceFollowedByPeriodCommaColonOrSemicolon = /^\s(\.|,|:|;)$/;

// console.log(whitespaceFollowedByPeriodCommaColonOrSemicolon.test(" ."));
// console.log(whitespaceFollowedByPeriodCommaColonOrSemicolon.test(" ,"));
// console.log(whitespaceFollowedByPeriodCommaColonOrSemicolon.test(" :"));
// console.log(whitespaceFollowedByPeriodCommaColonOrSemicolon.test(" ;"));
// console.log(whitespaceFollowedByPeriodCommaColonOrSemicolon.test(" !"));
// console.log(whitespaceFollowedByPeriodCommaColonOrSemicolon.test("_."));

let longerThan6Letters = /^\w{7,}$/;

// console.log(longerThan6Letters.test("crabapples"));
// console.log(longerThan6Letters.test("applesi"));
// console.log(longerThan6Letters.test("apple"));

let withoutLetterE = /^[^e]*$/i;

// console.log(withoutLetterE.test("aplication"));
// console.log(withoutLetterE.test("apple"));
// console.log(withoutLetterE.test("APPLES"));