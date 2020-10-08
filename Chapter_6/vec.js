class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() { // returns distance of the point (x,y) from the origiin (0,0)
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

let vector1 = new Vec(0,4);
let vector2 = new Vec(0,-2);
let vector3 = vector1.plus(vector2);

console.log("vec1 length:", vector1.length);
console.log("vec2 length:", vector2.length);
console.log("vec3 length:", vector3.length);