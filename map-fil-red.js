// =============================== Map =====================================================

// // print square of all elements
// let arr = [1, 2, 3, 4, 5,6 ]
// let ans = arr.map((item, index) => {return item**2})
// console.log(ans)





// ==================================== Filter =================================================

// //find odd no
// let arr = [1,2, 3,4  ,5 ,7, 9]
// let ans = arr.filter((item)=>{
//     return item % 2 !=0
// })
// console.log(ans)



//return no greater than 10
// let arr =[2, 70, 3, 42, 4, 65 , 33]
// let ans = arr.filter((item) => {
//     return item>10
// })
// console.log(ans)








// ================================= Reduce method ===============================

// // give sum of all elements
// let arr = [100,200,35,44,55,66,88,99 ,67 ,4,5]
// let ans = arr.reduce((prev , curr) => {
//     return prev+curr
// } , 0) //yeh jo zero h vo hum ne bataya h k yeha se start karo , nh bataynge to vo khud se first value ko assume kar k chalega.
// console.log(ans)






//find max no in arr
//  let arr = [1, 2,3,4 , 5, 6,8 ,9 ,67 ,4,5]
//  let ans = arr.reduce((prev , curr) => {
//     return Math.max(prev,curr)
//  })
//  console.log(ans)




// // count total no of elements
// let arr = ["a" , "b" , "j" , "j" , "ir"]
// let ans = arr.reduce((p , c) => {
//     return p + 1
// }, 0)
// console.log(ans)





// count occurance of a elements in object
// let arr = ["a", "b","a","c", "a", "a","b"]
// let ans = arr.reduce((p,c) => {
//     if(p[c])
//     {
//         p[c] = p[c] + 1
//     }
//     else{
//         p[c] = 1
//     }
//     return p
// }, {})
// console.log(ans)






//falatern the array 
// let arr = [[1, 2, 3],[5, 6],[8]]
// let ans = arr.reduce((p,c) =>{
//     return [...p , ...c]
// })
// console.log(ans)




// convert array to obj
// let arr = ["name" , "age"]
// let ans = arr.reduce((p,c) => {
//      p[c] = null
//      return p
// }, {})
// console.log(ans)








// group the elements according to even odd
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let ans = arr.reduce((p,c) => {

//     if(c%2 == 0)
//     {
//         p.even.push(c)
//     }
//     else
//     {
//         p.odd.push(c)
//     }

//     return p
// } ,{
//     even : [],
//     odd: []

// })
// console.log(ans)









// // group the elements according to even odd without making a key of array in object
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let ans = arr.reduce((p, c) => {

//     if (c % 2 == 0) {
//         if (p.even) {
//             p.even.push(c)
//         }
//         else {
//             p.even = [c]
//         }
//     }
//     else {
//         if (p.odd) {
//             p.odd.push(c)
//         }
//         else {
//             p.odd = [c]
//         }

//     }

//     return p
// }, {})
// console.log(ans)










// map / filter ques write name of users who are above 18
// let arr = [
//     {name:"soms" , age:24},
//     {name:"shreya" , age:17},
//      {name:"ved" , age:19}
// ]
// let ans = arr.filter(item => item.age>18).map(item=> item.name)
// console.log(ans)