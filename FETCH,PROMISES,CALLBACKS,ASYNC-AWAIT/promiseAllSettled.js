const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Resolved")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Rejected")
})

const promises = [promise1, promise2]

Promise.allSettled(promises)
    .then((results) => {
        results.forEach((result) => console.log(result))
    })