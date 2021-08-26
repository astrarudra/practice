// Call & Apply - helps in function borrowing

let a = {
    fullname: "Rudra",
    printFn: function() {
        console.log(this.fullname)
    },
    printFn2: () => console.log(this.fullname), // Dont not work
    printFnParam: function(arg, arg2 = "") {
        console.log(this.fullname + arg + arg2)
    },
}

let b = {
    fullname: "Santu"
}

a.printFn.call(b)
a.printFn2()
a.printFnParam(" Roy")

a.printFnParam.call(b, " Roy", " Test")
a.printFnParam.apply(b, [" Roy", " Test"]) // Apply is same as call, only how paramter is passed is different.

console.log("=========== BIND =============")

function printFn() {
    console.log(this.fullname)
}

var binded = printFn.bind({fullname: "Rudra Roy"})

console.log(binded())
console.log(binded())