// assigning a function to a variable
const fun = () => {
    console.log("Function Treated as Variable")
}

fun()

// passing a function to a function

function sayHello() {
    return "Hello"
}

function gretting(helloMessage, name) {
    console.log(helloMessage() + " " + name)
    console.log(`${helloMessage()} ${name}`)
}

gretting(sayHello, "Javascript")

// returning a function from a function

function sayBye() {
    return () => {
        return "Bye"
    }
}

function grettings(message, name) {
    const returnMessage = message()
    console.log(`${returnMessage()} ${name}`)
}

grettings(sayBye, "Javascript")