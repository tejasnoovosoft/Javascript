function outer() {
    const outerName = "In Outer Function"

    function innerFirst(outerFunName) {
        const name = "In First Outer Function"
        console.log(name)
        console.log(outerFunName)
    }
    innerFirst(outerName)
}

outer()

function makeSizer(size) {
    return function () {
        return `${size}px`
    };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

console.log(size12())
console.log(size14())
console.log(size16())