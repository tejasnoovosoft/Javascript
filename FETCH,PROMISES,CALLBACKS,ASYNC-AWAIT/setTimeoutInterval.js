const a = 23;
const b = 12;

/*console.log("Ordering Burger")
for (let i = 0; i < 5000000000; i++) {
    const n = i * i
}*/

const d = 12

function greet() {
    console.log("Hello World")
}

console.log("Before SetTimeout")

const timeoutId = setTimeout(greet, 2000)

console.log("After SetTimeout")

let count = 0
setInterval(() => {
    count++;
    const date = new Date().toTimeString()
    console.log(date)
}, 1000)