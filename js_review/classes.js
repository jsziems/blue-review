// Declare a class example
class Rectangle {
    // When you used "new <Classname>" this is called
    constructor(height, width) {
        // var.height
        this.height = height
        this.width = width
    }

    // Static is on the class and you can't access this
    static retLarger (a, b){
        if (a.area >= b.area) return a
        return b
    }

    // This looks like a property, but is a function
    get area() {
        return this.calcArea()
    }

    // This is an instance method
    calcArea() {
        return this.height * this.width
    }
}

let myShape = new Rectangle(5, 6)
let myShape2 = new Rectangle(8, 9)

console.log(Rectangle.retLarger(myShape, myShape2))