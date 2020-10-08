// function* powers(n) {
//     for (let current = n;; current *= n) {
//         yield current;
//     }
// }

// for(let power of powers(3)) {
//     if (power > 50) break;
//     console.log(power);
// }

// Group.prototype[Symbol.iterator] = function*() {
//     for (let i = 0; i < this.members.length; i++) {
//         yield this.members[i];
//     }
// };

// try {
//     setTimeout(() => {
//         throw new Error("Woosh");
//     }, 20);
// } catch (_) {
//     //This will not run
//     console.log("Caught!");
// }

// let start = Date.now();
// setTimeout(() => {
//     console.log("Timeout ran at", Date.now() - start);
// }, 20);
// while (Date.now() < start + 50) {}
// console.log("Wasted time until", Date.now() - start);

// Promise.resolve("Done").then(console.log);

// console.log("Me first!");


// function network(nest) {
//     return Array.from(nest.state.connections.keys());
// }

// function anyStorage(nest, source, name) {
//     if (source === nest.name) return storage(nest, name);
//     else return routeRequest(nest, source, "storage", name);
// }

// async function chicks(nest, year) {
//     let lines = network(nest).map(async name => {
//         return name + ": " + await anyStorage(nest, name, `chicks in ${year}`);
//     });
//     return (await Promise.all(lines)).join("\n");
// }