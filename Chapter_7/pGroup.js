class PGroup {
    constructor(group) {
        this.group = group;
    }

    add(value) {
        if(!this.group.includes(value)){
            return new PGroup(this.group.concat(value));
        }
    }

    delete(value) {
        let idx = this.group.indexOf(value);
        if(idx !== -1){
            return new PGroup(this.group.slice(0, idx).concat(this.group.slice(idx + 1)));
        }
    }

    has(value){
        return this.group.includes(value);
    }
}

PGroup.empty = new PGroup([])

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(a.has("a"));
// → true
console.log(ab.has("c"));
// → false
console.log(b.has("a"));
// → false