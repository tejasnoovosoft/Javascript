function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "Cheese")
    })
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, `${cheese} Dough`)
    })
}

function makePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, `${dough} pizza`)
    })
}

async function orderPizza() {
    try {
        const cheese = await getCheese()
        console.log(`now we have ${cheese}`)
        const dough = await makeDough(cheese)
        console.log(`now we have ${dough}`)
        const pizza = await makePizza(dough)
        console.log(`now we have ${pizza}`)
    } catch (e) {
        console.log(e)
    }
}

orderPizza()
    .then(() => {
        console.log("Order Done...!")
    })