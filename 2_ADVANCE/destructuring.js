let a, b, args;

/*[a, b] = [10, 20]
console.log(a)
console.log(b)*/

[a, b, ...args] = [1, 2, 3, 4, 5]
console.log(args)

const obj = {
    x: 1,
    y: 2,
    z: 3
}

const {y, z} = obj
console.log(y)
console.log(z)