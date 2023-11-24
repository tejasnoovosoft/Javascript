function greaterThanFive(names) {
    return names.filter((name) => {
        return name.length > 5
    })
}

const names = ["Tejas", "Vaishnav", "Shreyas", "Sadid", "Pulkit", "Harshit"]
const result = greaterThanFive(names)
console.log(result)