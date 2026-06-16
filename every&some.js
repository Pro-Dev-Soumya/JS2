// ================================ Some ===================================================

// let arr = [1, 2, 3, 4, 5,6]
// let ans = arr.some((item , index) => {  //agr ek bhi element condition ko match karega to true dega
//     return item % 2 == 0        //true mila condition break ange check nh karega
// })


// let ans2 = arr.every((item) => { // sare condition se match hone chiye varna false de dega
//     return item % 2 == 0   //false
// })
// console.log(ans)
// console.log(ans2)






// check any user is above 18 age
// let arr = [
//     {name:"soms" , age:24},
//     {name:"shreya" , age:17},
//      {name:"ved" , age:19}
// ]
// let ans = arr.some((item) =>
// {
//     return item.age < 18
// })
// console.log(ans)





// //check any students have marks > 90 in any subject
// let students = [
//     {name:"a", marks:[20, 60, 88]},
//     {name:"b", marks:[70, 60, 58]},
//     {name:"c", marks:[90, 99, 38]}
// ]

// // method 1 of doing this ques
// let ans = students.some((item) =>
// {
//     let ispresent = false
//     for(let num of item.marks)
//     {
//         if(num>90)
//         {
//             ispresent = true
//         }
//     }
//     return ispresent
// })
// console.log(ans)


// // method 2
// let ans2 = students.some((item) =>{
//     return item.marks.some((val) =>{
//         return val>90
//     })
// })
// console.log(ans2)







// // if item is greater than 25
// let data = [
//     {cat:"a" , item:[20, 4, 2]},
//     {cat:"b" , item:[0, 9, 8]},
// ]
// let ans = data.some((val) => {
//     return val.item.some((num)=>
//     {
//         return num > 25
//     })
// })
// console.log(ans)







// ======================= QUes of every =============================
// // //check all a students have passed marks >= 40 in all subject
// let students = [
//     {name:"a", marks:[90, 60, 88]},
//     {name:"b", marks:[70, 60, 58]},
//     {name:"c", marks:[90, 99, 98]}
// ]
// let ans = students.every((item)=>
// {
//     return item.marks.every((val) =>
//     {
//         return val>=40
//     })
// })
// console.log(ans)