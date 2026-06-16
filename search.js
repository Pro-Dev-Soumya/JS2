// ========================= linear search ============================================


// // print index of target element else print -1
// let arr = [1, 4, 66, -2, 98, 2]
// let target = 66
// let idx = -1
// for(let i = 0; i<arr.length;i++)
// {
//     if(arr[i] == target)
//     {
//         // console.log(i)
//         idx = i
//         break
        
//     }

// }
// console.log(idx)






// // print index of target element occurance 
// let arr = [1, 4, 66, -2, 66,98,66, 2]
// let target = 66
// for(let i = 0; i<arr.length;i++)
// {
//     if(arr[i] == target)
//     {
//         console.log(i)
//     }
// }










// ==============================BINARY SEARCH===========================================


// // print index of target element else print -1 // as this is a sorted array
// let arr = [1, 2, 3, 4, 5, 6]
// let target = 66
// let idx = -1
// let s = 0
// let e = arr.length-1
// while(s<=e)
// {
//     let mid = Math.floor((s+e)/2)
//     if(arr[mid] == target)
//     {
//         idx = mid
//         break
//     }
//     else if(target > arr[mid])
//     {
//         s = mid +1
//     }
//     else
//     {
//         e = mid -1
//     }
// }
// console.log(idx)







// // print target element in unsorted array
// let arr = [5, 8, 1, -7, 33, 99, 2, 4]
// let target = 8
// arr.sort((a,b) =>(a-b));
// console.log(arr)
// let s = 0
// let e = arr.length-1
// let idx = -1
// while(s<=e)
// {
//     let mid = Math.floor((s+e)/2)
//     if(arr[mid] == target)
//     {
//         idx = mid
//         break
//     }
//     else if(target>arr[mid])
//     {
//         s = mid + 1
//     }
//     else
//     {
//         e = mid-1
//     }
// }

// console.log(idx)