// ============================== Higher order functions ===============================================

function HOF()
{
    const fn=() => {
        console.log("hello this is HOF")
    }
    return fn
}

// console.log(HOF()())
let returndefn = HOF()
returndefn
HOF()()





function hof2(cb)
{
    cb()
}
hof2(() => {console.log("hello hof2")})





function hof3(cb)
{
    cb()
    return () => {}
}