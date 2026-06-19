// ================================ MapS =======================================================

// let mymap = new Map()
// mymap.set("name", "soumya")      // add value to map
// mymap.set("name", "shreya")     // updated value dikhegi same key k liye
// mymap.set(10 , "its a no" )


// mymap.clear()       // delete all
// mymap.delete(10) // we have to write key for deleting element


//loop 1
// for(let item of mymap)
// {
//     console.log(item)
// }



// for(let [key, value] of mymap)
// {
//     console.log(key) //to get key
//     console.log(value)  //to get value
// }


// const iterable = mymap.entries()
// for(let item of iterable)
// {
//     console.log(item[0], item[1])
// }



// mymap.forEach((val , key) => {
//     console.log(key , val)
// })



// console.log(mymap.get("name"))  // gives value
// console.log(mymap.get("name234")) // gives undefined
// console.log(mymap.has("name"))     // gives true -boolean
// console.log(mymap.has("nameiuygfvbnmj"))   // give false

// console.log(mymap)





// ++++++++++++++++++++++++++++ QUestion ++++++++++++++++++++++++++++++++++++++++++

// count frequency

//Method 1

// let str = "i love javascript"
// let map = new Map()
// console.log(map)
// for(let item of str)
// {
//     if(map.has(item))
//     {
//         map.set(item, map.get(item) + 1) // key, value = item - i , map.get - value+1
//     }
//     else
//     {
//         map.set(item,1) // item : value
//     }
// }
// console.log(map)


// //Method 2
// let str = "i love javascript"
// let map = new Map()
// console.log(map)
// for(let item of str)
// {
//     map.set(item, (map.get(item) || 0)+1)
// }
// console.log(map)
















// give index of 2 no of sum which give target value = 7+2 = 9
// // method 1 - by nested loops
// let arr = [2, 7, 11, 15]
// let target = 9
// for(let i = 0; i<arr.length-1;i++)
// {
//     for(let j = i+1; j< arr.length; j++)
//     {
//         if(arr[i]+arr[j] == target)
//         {
//             console.log([i,j])
//         }
//     }
// }


// //method 2
// let arr = [2, 7, 11, 15]
// let target = 9
// let map = new Map()
// for(let i = 0; i<arr.length; i++)
// {
//     if(map.has(target-arr[i]))
//     {
//         console.log(i , map.get(target-arr[i]))
//     }
//     else
//     {
//         map.set(arr[i],i)
//     }
// }










