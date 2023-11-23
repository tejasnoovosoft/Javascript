const names = ["Kotlin", "Java", "Javascript", "Python", "JavaX", ["C", "C++"], ["React", "Node"]]

console.log(names.find(
    (element) => element === "Kotlin"
))

console.log(names.filter(
    (name) => name.includes("ava")
))

// concate all sub-arrays into one array
console.log(names.flat())

const numbers = [1, [2, [3, [4, [5, 6]]]]]
console.log(numbers.flat(1))

//flatmap is a map followed by flat

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);

console.log(arr1 instanceof Array)

// we can remove/replace elements
arr1.splice(1, 0, 25)
console.log(arr1)

console.log(arr1.sort())
console.log(names.sort())