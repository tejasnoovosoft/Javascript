let y = "Outer y";

class A {
    static field = "Inner y";
    static {
        const y = this.field;
    }

    getY() {
        console.log(y)
    }
}

const obj = new A()

console.log(y)
console.log(A.y)
obj.getY()
