function reduceMethod(numbers) {
    return numbers.reduce(
        (accumalator, currentvalue) => accumalator + currentvalue
    )
}

function filterMethod(numbers) {
    return numbers.filter(
        (element) => element % 2 === 0
    )
}

function mapMethod(numbers) {
    return numbers.map(
        (element) => element * element
    )
}

const numbers = [10, 11, 12, 13, 14, 15]
console.log(reduceMethod(numbers))

const evenNumbers = filterMethod(numbers)
console.log(evenNumbers)

const squareNumbers = mapMethod(numbers)
console.log(squareNumbers)

