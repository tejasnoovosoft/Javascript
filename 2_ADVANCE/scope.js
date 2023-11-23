if (true) {
    // "if" block scope
    var count = 0;
    console.log(count); // 0
}
console.log(count);

function scopeDemo() {
    var course = ["C++", "Python", "Java"]
    console.log(course)
}

scopeDemo()
// console.log(course) ---> Reference error