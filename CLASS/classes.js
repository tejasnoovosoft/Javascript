class Rectangle {
    height = 0
    width

    constructor(height, width) {
        this.height = height
        this.width = width
    }

    calculateArea() {
        return this.height * this.width
    }

    get Height() {
        return this.height
    }

    get Width() {
        return this.width
    }

    setHeight(height) {
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    // initialize first
    static shape
    static {
        console.log("In Static Block")
        this.shape = "It's a Rectangle"
    }
}

const shape1 = new Rectangle(200, 300)
console.log(shape1.calculateArea())
shape1.setHeight(8000)
console.log(shape1)
console.log(Rectangle.shape)

