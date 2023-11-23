function loops(numbers) {

    // 'i' holds indexes
    for (let i in numbers) {
        console.log(i)
    }

    // 'i' holds actual data
    for (let i of numbers) {
        console.log(i)
    }
}

const numbers = [10, 20, 30, 40, 50]
loops(numbers)