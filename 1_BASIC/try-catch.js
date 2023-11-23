function tryCatch(num) {
    try {
        const a = 0 / num
        console.log(a)
    } catch (e) {
        console.log(e)
    } finally {
        console.log("In Finally Block")
    }
}

tryCatch(0)