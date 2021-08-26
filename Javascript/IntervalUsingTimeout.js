var customInterval = (fn, time) => setTimeout(()=> {
    fn();
    customInterval.clear = customInterval(fn, time)
}, time)

f = () => console.log("test")
customInterval(f, 100)
clearInterval(customInterval.clear)