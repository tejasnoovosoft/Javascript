function findDuplicates(elements) {
    return elements.filter((value, index, self) => {
        return self.indexOf(value) !== index
    })
}

const elements = [8, 4, 3, 2, 3, 4, 0]
const result = findDuplicates(elements)
console.log(result)