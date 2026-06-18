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

//Method 1

// function sum (arr)
// {
//     if(arr.length == 0)
//     {
//         return 0
            // return arr[0]
//     }
//     let firstelememt = arr.shift()
//         console.log(firstelememt)
//     return firstelememt + sum(arr)
// }
// console.log(sum([1,2, 3, 4,5]))


// //method 2
// function sum (arr ,i)
// {
//     if(i == arr.length-1) // 0==2// 1==2//2==2
//     {
//         return arr[i]
//     }
//     return arr[i] + sum(arr , i+1) //1
// }
// console.log(sum([1, 2, 3] , 0))












// find smallest number in an array using recursion
// function smallest(arr , i , n) //n== arr.length
// {
//     if(i == n-1)
//     {
//         return arr[i]
//     }
//     return Math.min(arr[i] , smallest(arr , i+1 , n))
// }
// console.log(smallest([5, 4, 3, 2, 1], 0, 5))





//find maximum in array
// function maximum(arr)
// {
//     function helper(arr , i) // is k ander kaam karnge agr bhar i , n wagera na use kar sakte ho
//     {
//         if(i == arr.length -1)
//         {
//             return arr[i]
//         }
//         return Math.max(arr[i] , helper(arr, i+1))
//     }
//     return helper(arr , 0)
// }
// console.log(maximum([1,4, 6, 3,9]))






// // find digit of sum
// function sumofdigit(n)
// {
//     if(n==0)
//     {
//         return 0
//     }
//     // let ld = n%10
//     // n = Math.floor(n/10)
//     // return ld + sumofdigit(n) 

//     return (n%10) + sumofdigit(Math.floor(n/10))
    
// }
// console.log(sumofdigit(123))













//String Plaindrome

// function Plaindrome(str)
// {
//     function helper(str , s, e)
//     {
//         if(s>=e)
//         {
//             return true
//         }
//         if(str[s] != str[e])
//         {
//             return false
//         }

//         return helper (str, s+1 , e-1)
//     }
//     return helper(str , 0 , str.length-1)
// }
// console.log(Plaindrome("Niharika"))








//print array recursively
// function print(arr, i , n, ans="")
// {
//     if(i==n)
//     {
//         console.log(ans)
//         return
//     }
//     ans+=arr[i] + " "
//     print(arr , i+1,n, ans)
// }
// print([1, 2, 3, 4] , 0, 4)










//find index of given target value of an array -1, 3
// function index(arr, n, x) //n= arr.length , x = target
// {
//     function helper(arr, i , str) // i = index , str = string
//     {
//         if(i==n)
//         {
//             console.log(str)
//             return
//         }
//         if(arr[i]==x)
//         {
//             str+=i +" "
//         }
//         helper(arr, i+1, str)
//     }

//     return helper(arr, 0, "")
// }
// (index([1, 2, 3, 2, 4] , 5 , 2))















//check arrayn is plaindrome or not  return true == plaindrome else retuurn false
// function plaindrome(arr , s, e) // s= start , e = end
// {
//     if(arr[s]>= arr[e])
//     {
//         return true
//     }
//     if(arr[s] != arr[e])
//     {
//         return false
//     }
//     return plaindrome (arr , s+1, e-1)
// }
// console.log(plaindrome([1, 2, 3,2, 1], 0, 3))








//recursive multiplication but without using multiply - can only do by addition and substration
// //Method 1 
// function mul (N, M)
// {
//     if(M==1)
//     {
//         return N
//     }
//     return N + mul(N , M-1)
// }
// console.log(mul(2, 4))




// //Method 2
// function mul (n, m)
// {
//     function helper(n, m, ans)
//     {
//         if(m==0)
//         {
//             console.log(ans)
//             return
//         }
//         helper(n, m-1, ans+n)
//     }
//     return helper(n, m, 0)
// }
// mul(71, 81)















//Last occurance of target index in an array , if there is not a target print -1
// //Method 1
// function lastindex(arr, target, startindex )//stratindex = arr.length-1
// {
//     function helper(i, ans)
//     {
//         if(i == arr.length)
//         {
//             return ans
//         }
//         return helper(i+1 , arr[i] == target? i:ans)
//     }
//     return helper(0 , -1)
// }
// console.log(lastindex([1, 2, 3, 1, 3,2,4], 9, 0))








// // //method 2
// function lastindex(arr, target, startindex=arr.length-1 )//stratindex = arr.length-1
// {
//      if (startindex < 0) {
//         return -1;
//     }

//     if(arr[startindex] == target)
//     {
        
//         return startindex
//     }
//     return lastindex(arr, target, startindex-1)
// }
// console.log(lastindex([1, 2, 3, 1, 3,2 , 4], 1))













//count the target number - 11212 = 1 comes  3 times
// //Method 1
// function count(num)
// {
//     function helper(num , ans)
//     {
//         if(num==0)
//         {
//             console.log(ans)
//             return
//         }
//         let ld = num%10
//         num = Math.floor(num/10)
//         if(ld==1)
//         {
//             ans++
//         }
//         helper(num, ans)
//     }
//     return helper(num , 0 )
// }
// count(111231)




// //Method 1
// function count1(n)
// {
//     if(n==0)
//     {
//         return 0
//     }

//     let ld = n%10
//     n =Math.floor(n/10)

//     if(ld==1)
//     {
//         return 1+ count1(n)
//     }
//     else
//     {
//         return count(n)
//     }
// }
// console.log(count1(12343231))















//count how many times aba  & abc are coming in string -3
// function count(str ,i)
// {
//     if(i>str.length-2)
//     {
//         return 0
//     }
//     if(str[i] == "a" && str[i+1] == "b" && (str[i+2] == "a" ||str[i+2] == "c" ))
//     {
//         return 1 + count(str, i+1)
//     }
//     else{
//         return count(str,i+1)
//     }
// }
// console.log(count("abaibabcabaab" , 0))











//print array reverse recursively
// function reverse (arr, i, n)
// {
//     if(i==n)
//     {
//         return ""
//     }
//     return reverse(arr,i+1,n) + arr[i] +" "

// }
// console.log(reverse([1, 2, 3,4], 0, 4))













//febonacci games = nth round-last k 4 num - 1,1,1,1,4,7,13, 25 //1, 2, 3, 4, 5, 6, 7, 8 (8th wale ka num chiye = 25)
// function febonacci(n)
// {
//     if(n==1||n==2||n==3||n==4)
//     {
//         return 1
//     }
//     return febonacci(n-1)+febonacci(n-2)+febonacci(n-3)+febonacci(n-4)
// }
// console.log(febonacci(8))












//if there is identical character in a string print "*" in between = hel*lo
// function star(str)
// {
//     function helper(str , i, ans)
//     {
//         if(i==str.length)
//         {
//             return ans
//         }
//         if(str[i] == str[i+1])
//         {
//             ans+=str[i]+"*"
//         }
//         else{
//             ans+=str[i]
//         }
//         return helper(str, i+1, ans)
//     }
//    return helper(str, 0, "")
// }
// console.log(star("hello"))














//print count of number of digits  in a number - 12345 = 5

// //method1
// function count(num)
// {
//     let ans = Math.ceil(Math.log10(num))
//     return ans == 0? 0 : ans
// }
// console.log(count(12345))




// //Method 2
// function count1(n)
// {
//     if(n==0)
//     {
//         return 0
//     }
//     return 1 + count1(Math.floor(n/10))
// }
// console.log(count1(12345))




// //Method 3
// function count1(num)
// {
//     function helper(num, count)
//     {
//         if(num == 0)
//         {
//             return count
//         }

//         let ld = num%10
//         num = Math.floor(num/10)
//         count++

//         return helper(num , count)

//     }
//     return helper(num , 0)
// }
// console.log(count1(1234))
















//remove all the X in from the string - aab
// function nox(str, index, ans)
// {
//     if(index==str.length)
//     {
//         return ans
//     }
//     if(str[index]=="x")
//     {
//         return nox(str, index+1, ans)
//     }
//     else{
//         return nox (str, index+1, ans+str[index])
//     }
// }
// console.log(nox("xaabx", 0, ""))



















//Merege 2 sorted array - without using sort and use nested loops
// //Method 1
// let a1 = [1, 7, 37, 46, 56]
// let a2 = [3, 5, 4, 10]
// f
// unction merge(a1, a2, )
// {
//     let ans = []
//     let j = 0
//     let i = 0

//     while(i<a1.length && j<a2.length)
//     {
//         if(a1[i] <=a2[j])
//         {
//         ans.push(a1[i])
//         i++
//         }
//         else{
//             ans.push(a2[j])
//             j++
//         }
//     }

//     while(i<a1.length)
//     {
//         ans.push(a1[i])
//         i++
//     }
//     while(i<a2.length)
//     {
//         ans.push(a2[j])
//         j++
//     }
//     return ans
// }
// console.log(merge(a1, a2))









// //Method 2
// let a1 = [1, 7, 37, 46, 56]
// let a2 = [3, 5, 4, 10, 100, 101, 102]
// function merge(a1, a2, )
// {
//     let ans = []
//     let j = 0
//     let i = 0

//     while(i<a1.length || j<a2.length)
//     {
//         if(a1[i] <=a2[j])
//         {
//         ans.push(a1[i])
//         i++
//         }
//         else{
//             if(a2[j])
//             {
//                 ans.push(a2[j])
//                 j++
//             }
//             else
//             {
//                 ans.push(a1[i])
//                 i++
//             }
//         }
//     }

//     return ans
// }
// console.log(merge(a1, a2))

















