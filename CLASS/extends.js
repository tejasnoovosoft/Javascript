class A {
    static feild = "Class A"

    get Feild() {
        return A.feild
    }
}

class B extends A {
    static {
        console.log(super.feild)
    }

    get Feild(){
        console.log("In Class B")
    }
}

let getPrivateFeild;

class D {
    #privateFeild

    constructor(v) {
        this.#privateFeild = v
    }

    static {
        getPrivateFeild = (d) => d.#privateFeild
    }

    static speak() {
        return this
    }

}

console.log(getPrivateFeild(new D('Private')))

const obj = new B()
obj.Feild