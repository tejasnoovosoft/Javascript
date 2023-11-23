// select seats
// enter name
// payment

function bookRailwayTicket() {
    const seat = 'A3'
    const name = "Tejas"
    selectSeats(seat)
        .then((seat) => {
            enterDetails(name, seat)
                .then((details) => {
                    console.log(details)
                    submitPayment(name)
                        .then((paymentStatus) => {
                            console.log(paymentStatus)
                        })
                })
        })
}

function selectSeats(seat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Seats Confirmed")
            resolve(`confirmed ${seat}`)
        }, 2000)
    })
}

function enterDetails(name, seat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} : ${seat} confirmed`)
        }, 2000)
    })
}

function submitPayment(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name}'s payment confirmed`)
        }, 2000)
    })
}

bookRailwayTicket()