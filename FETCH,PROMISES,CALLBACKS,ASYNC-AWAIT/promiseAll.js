const promise1 = Promise.resolve(10)
const promise2 = Promise.reject(30)
// const promise2 = Promise.resolve(30)
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Javascript")
})

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values)
    })
    .catch((values) => {
        console.log(values)
    })

const tOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completed in ${t}`)
        }, t)
    })
}

Promise.all([tOut(2000), tOut(3000)])
    .then((result) => {
        console.log(result)
    })