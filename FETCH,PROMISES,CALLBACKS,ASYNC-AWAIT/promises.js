/*
JavaScript Promise are easy to manage when dealing with multiple
asynchronous operations where callbacks can create callback hell leading to unmanageable code.*/

// good way to handle asynchronous operations after 2015
function orderPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isAvailable = true;
            if (isAvailable) {
                const pizza = "Pizza is Available....!"
                resolve(pizza)
            } else {
                reject("We do not have pizza...!")
            }
        }, 5000)
    })
}

const pizzaPromise = orderPizza()
pizzaPromise
    .then((status) => {
        console.log(status)
    })
    .catch((status) => {
        console.log(status)
    })


const promise = new Promise((resolve, reject) => {
    const x = "JavaScript"
    const y = "javaScript"
    if (x === y) {
        resolve()
    } else {
        reject()
    }
})

promise
    .then(() => console.log("Operation Successfully Done"))
    .catch(() => console.log("Some error occurs"))