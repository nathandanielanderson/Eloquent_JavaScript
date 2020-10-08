class Group {
    constructor() {
        this.set = [];
    }

    add(value) {
        if(this.set.indexOf(value) === -1) {
            this.set.push(value);
        }
    }

    delete(value) {
        let idx = this.set.indexOf(value);
        if(idx > 0){
            this.set = this.set.slice(0, idx).concat(this.set.slice(idx + 1));
        } else if(idx === 0) {
            this.set = this.set.shift();
        }
    }

    has(value) {
        return this.set.indexOf(value) !== -1;
    }

    get(i) {
        return this.set[i];
    }

    get length() {
        return this.group.length;
    }

    static from(obj) {
        let temp = new Group();
        for(let value in obj) {
            temp.add(obj[value]);
        }

        return temp;
    }

    
}

class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }

    next() {
        if(this.i === this.group.length) {
            return {done: true};
        }

        let value = {
            i: this.i,
            value: this.group.get(this.i)
        };

        this.i++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

let set1 = Group.from([1,2,3,4,5]);

console.log(set1);

for(let i in  set1) {
    console.log(set1[i]);
}