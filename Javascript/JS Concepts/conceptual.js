// Think of the output of the following, without running. 

console.log("Start")
setTimeout(() => console.log("setTimeout"), 0)
var a = () => new Promise((resolve) => resolve("promise"))
a().then(o => console.log(o))
console.log("end")

// Type casting
2 + 1 + "3"
if(!"false")
if([])
if({})
if("")



