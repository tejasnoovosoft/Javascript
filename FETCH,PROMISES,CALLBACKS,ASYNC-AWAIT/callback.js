const orderPizza = (callback) => {
    setTimeout(() => {
        const pizza = 'Ordered'
        callback(pizza)
    }, 5000)
}
orderPizza((pizza) => {
    console.log(`here is my ${pizza}`)
})

console.log("Test")