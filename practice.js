
//sum of index element of both array and put it on same index

// let arr1 =[1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]
// let arr3= []
// for(let i= 0; i<arr1.length; i++)
// {
//      arr3[i] = arr1[i]+arr2[i]
//     // console.log(add)
//     // arr3.push(add)
    
// }
// console.log(arr3)












//sort by absolute diffrence - [ 5, 7, 3, 10, 1 ]
// let arr = [7, 3, 10, 5, 1]
// let target = 6

// arr.sort((a,b) =>
// {
//     let d1 = Math.abs(target-a)  //math.abs values ko positive kar dega
//     let d2 = Math.abs(target-b)

//     if(d1==d2)
//     {
//         return a-b
//     }
//     else{
//         return d1-d2
//     }
// })
// console.log(arr)















//Most frequnet subarry of length of k
// let arr = [1, 2, 1, 2, 1 ,2 ,1]
// let k = 2
// let map = new Map()
// for(let i =0 ; i<=arr.length-k;i++)
// {
//     let temp = arr.slice(i , i+k)
//     let str = temp.join("")

//     if(map.has(str))
//     {
//         map.set(str , map.get(str) +1)
//     }
//     else
//     {
//         map.set(str, 1)
//     }
// }
// let maxfreq = -Infinity
// let ans = null

// for(let item of map)
// {
//     if(item[1] > maxfreq)
//     {
//         maxfreq = item[1]
//         ans = item[0].split("").map(Number)
//     }
// }

// console.log(ans)