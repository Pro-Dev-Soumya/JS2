// ============================== Sorting =======================================================
// let arr = [-3, 52, 66, 2, 1, 5, 77]
// arr.sort((a,b) => (a-b))     // a-b  = accending order , b-a = decendeng order
// console.log(arr)





// ++++++++++++++++++ Bubble sort ++++++++++++++++++++++++++++++++++++++++++++
// let arr = [5, 4, 3, 2, 1,44, 22]
// for(let i = 0; i<arr.length-1; i++)
// {
//     let isSorted = true
//     for(let j = 0; j<arr.length-1-i; j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp

//             isSorted = false
//         }
//     }
//     if(isSorted == true)
//     {
//         break
//     }

// }
// console.log(arr)








// let arr = [6, 7, 8,1, 2, -10, 0]
// for(let i = 0; i<arr.length-1; i++)
// {
//     let isSorted = true
//     for(let j = 0; j<arr.length-1-i; j++)
//     {
//         if(arr[j]<arr[j+1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp

//             isSorted = false
//         }
//     }
//     if(isSorted == true)
//     {
//         break
//     }

// }
// console.log(arr)







// Acending according to the age
// let arr = [
//     {
//      name:"soms" ,
//      age:24
//     },
//     {
//      name:"shera" ,
//      age:45
//     },
//     {
//      name:"ved" ,
//      age:4
//     },
//     {
//      name:"harsh" ,
//      age:1
//     },
//     {
//      name:"mum" ,
//      age:67
//     }
// ]


// for(let i = 0; i<arr.length-1; i++)
// {
//     let isSorted = true
//     for(let j=0; j<arr.length-1-i;j++)
//     {
//         if(arr[j].age > arr[j+1].age)
//         {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
            
//             isSorted = false
//         }
//     }
//     if(isSorted == true)
//     {
//         break
//     }
// }
// console.log(arr)