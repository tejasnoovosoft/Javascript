function findUniqueElements(numbers) {
    return numbers.filter((value, index, self) => {
        return self.indexOf(value) === index
    })
}

const arr = [1, 4, 2, 1, 5, 1, 5];
const result = findUniqueElements(arr)
console.log(result)