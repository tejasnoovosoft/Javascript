const obj = {
    num: 20
};

const add = function (a, b, c) {
    return this.num + a + b + c
}

console.log(add.call(obj, 10, 20, 30))
console.log(add.apply(obj, [10, 20, 30]))