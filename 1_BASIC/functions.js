function multiply(multiplier, ...args) {
    return args.map((x) => multiplier * x)
}

console.log(multiply(5, 1, 3, 4, 5, 6))