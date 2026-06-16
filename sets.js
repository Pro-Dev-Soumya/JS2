//==============================Sets======================================================
// const mysets = new Set()
// mysets.add(1)
// mysets.add(2)
// mysets.add(1)
// mysets.add("uygfvbn")
// // console.log(mysets)





// let arr =[1, 2, 3,4, 2,3 ,4 ,2 ,5,2]
// const mysets = new Set(arr)

// mysets.add(99)          // it add elements
// // mysets.delete(2)        // it delet the elemnet
// // mysets.clear()          // delet all the elemnets

// let something = mysets.entries()    // gives values in form of arr
// console.log(something)
// console.log(mysets)

// let arr2 = Array.from(mysets)   // converts sets into array
// console.log(arr2)
//console.log(mysets.size)          // give length






// Cheack there is duplicates or not -{ 1, 2, 3, 4, 5 }
// let arr = [1, 2, 3, 4,5,]
// let set = new Set(arr)
// if(arr.length==set.size)
// {
//     console.log("no duplicates")
// }
// else{
//     console.log("duplicates")
// }
// console.log(set)





//Intersection of 2 array
// let arr1 = [1, 2, 2, 4]
// let arr2 = [2, 2]
// let set = new Set(arr1)
// let ans = new Set()

// for(let item of arr2)
// {
//     if(set.has(item))
//     {
//         ans.add(item)
//     }
// }
// console.log(Array.from(ans))








// union of 2 array, flat the array
// let arr = [1, 2, 3]
// let arr2 = [2, 5]
// let ans = new Set([...arr, ...arr2])
// console.log(Array.from(ans))




// differnce btw 2 array , return elements present in A but not in B -[1,3]
// let A = [1, 2, 3]
// let B = [2, 4] 
// let set = new Set(A)
// for(let item of B)
// {
//     if(set.has(item))
//     {
//         set.delete(item)
//     }
// }

// console.log(set)







// Element in ethier array or not in both -[1, 4]
// let a = [1, 2, 3]
// let b = [2, 3, 4]
// let ans = new Set(a)
// for(let item of b)
// {
//     if(ans.has(item))
//     {
//         ans.delete(item)
//     }
//     else{
//         ans.add(item)
//     }
// }

// console.log(Array.from(ans))







// Longest consectutive set - 4 //1, 2, 3, 4
// let arr = [100, 4, 200, 1, 3, 2]
// let set = new Set(arr)
// let ans = 0
// console.log(set)
// for (let item of set) {
//     if (!set.has(item - 1))
//     {
//         let currentlength = 1

//         while (set.has(item + 1))
//         {
//             currentlength++
//             item++

//         }
//         ans = Math.max(ans, currentlength)
//     }
    
// }

// console.log(ans)