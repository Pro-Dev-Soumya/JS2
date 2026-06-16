//============================ Global Execution Context =================================
// function outer()
// {
//     console.log("outer")
//     function middle()
//     {
//         console.log("middle")
//         function inner()
//         {
//             console.log("inner")
//         }
//         inner()
//     }
//     middle()
// }
// outer()






//=================================== Recursion ============================================
// Function callimng itself

// function sayhi()
// {
//     console.log("hello")
//     // sayhi()               // it will become infinite loop
// }
// sayhi()






//print GEC for this - print all no from 1-10
// function print(i, n)
// {
//     if(i>n)
//     {
//         return
//     }
//     console.log(i)
//     print(i+1 , n)
// }
// print(1,6)






//print GEC for this - print all no from 3-1 backcounting 
// function print(i, n)
// {
//     if(i>n)
//     {
//         return
//     }
//     print(i+1 , n)    // yeh phle chelega pura last me jo line reh rahi h vo print hogi
//     console.log(i)
  
// }
// print(1,6)








//Sum of all natural number upto N

// //Method 1

// function sum(n)
// {
//     if(n==1)
//     {
//         return 0
//     }
//     return n + sum(n-1)  //jo func call hua h (n+sum(n-1)) ab in k output + hhonge -- 1+2+3+4+5 = 15
// }
// console.log(sum(5))




//Method2
// function nosum (n , sum)
// {
//     if(n == 0)
//     {
//         console.log(sum)
//         return
//     }
//     nosum(n-1 , sum+n)
// }
// nosum(5,0)




// //Method 3
// function nosum(n, curr,sum)
// {
//     if(curr == n)  // 1 == 3 , 2==3 , 3==3
//     {
//         console.log(sum+curr)  // 3 +3 = 6
//         return
//     }
//     nosum(n , curr+1, sum+curr)  // 3 , 2 , 1 // 3, 3 , 3
// }
// nosum(3 , 1, 0)




// //Method 4
// function nosum(n,curr)
// {
//     if(curr==n) // 1==3 , 2==3, 3==3 
//     {
//         return curr
//     }
//     return curr + nosum(n,curr+1) 
// }
// console.log(nosum(3,1))













//Ques write all num into a str - 54321
// //method1
// function print(n, ans)
// {
//     if(n==0)
//     {
//         console.log(ans)
//         return
//     }
//     print(n-1, ans+n+" ")
// }
// print(5, "")



// //method 2
// let str = ""
// function string(n)
// {
//     if(n==0)
//     {
//         console.log(str)
//         return
//     }
//     // console.log(n)
//     str+=n+" "
//     string(n-1)
// }
// string(5)














//Ques - Product of natural numbers -120
// function Product(n , ans)
// {
//     if(n==1)
//     {
//         console.log(ans)
//         return 1
//     }
//     Product(n-1 , ans*n)
// }
// Product(5 , 1)








//que - Print the right angle triangle pattern
// function print(n , str ="")
// {
//     if(n==0){
//         return
//     }
//     str+="* "
//     console.log(str)
//     print(n-1, str)
// }
// print(5)







// print numbers in a str -1 2 3 4 5
// function print(n , i, ans="")
// {
//     if(i>n)
//     {
//         console.log(ans)
//         return
//     }
//     ans+=i+" "
//     print(n , i+1 , ans)
// }
// print(5,1)







// Print ACCIOJOB n time
// function print(n)
// {
//     if(n==0)
//     {
//         return
//     }
//     console.log("ACCIOJOB")
//     print(n-1)
// }
// print(5)










// calculate the power of num and base
// function calculate(x, n)
// {
//     if(n==0)
//     {
//         return 1
//     }
//    return x * calculate(x, n-1 )
// }
// console.log(calculate(2, 2))






// Factorial of number
// function print(n)
// {
//     if(n==1)
//     {
//         return 1
//     }
//     return n * print(n-1) // 5*(4!) // 5*(3!) //5*(2!) // 2*3*4*5 = 120
// }
// console.log(print(5))









//Febonaci series
// function fibn(n)
// {
//     if(n==1)
//     {
//         return 0
//     }
//     if(n==2)
//     {
//         return 1
//     }
//     return fibn(n-1) + fibn(n-2)
// }
// console.log(fibn(5))









// //Sum of all number in an array
// function sum (arr)
// {
//     if(arr.length == 0)
//     {
//         return 0
//     }
//     let firstelememt = arr.shift()
//     return firstelememt + sum(arr)
// }
// console.log(sum([1,2, 3, 4,5]))
