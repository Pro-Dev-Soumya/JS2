// ============================== Sorting =======================================================
// let arr = [-3, 52, 66, 2, 1, 5, 77]
// arr.sort((a,b) => (a-b))     // a-b  = accending order , b-a = decendeng order
// console.log(arr)





// +++++++++++++++++++++++++++ Bubble sort ++++++++++++++++++++++++++++++++++++++++++++
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
































///++++++++++++++++++++++ Merge Sort ++++++++++++++++++++++++++++++++++++++
// recursion use hota h 
let a1 = [1, 7, 37, 46, 56]
let a2 = [3, 5, 4, 10, 100, 101, 102]


function merge(a1, a2, )
{
    let ans = []
    let j = 0
    let i = 0

    while(i<a1.length || j<a2.length)
    {
        if(a1[i] <=a2[j])
        {
        ans.push(a1[i])
        i++
        }
        else{
            if(a2[j])
            {
                ans.push(a2[j])
                j++
            }
            else
            {
                ans.push(a1[i])
                i++
            }
        }
    }

    return ans
}
console.log(merge(a1, a2))



//merge k liye jo code likha the vo niche merege sort me use hoga hum merege sort se bas 2 array nikal k de rahe h merge ko

let arr = [99, 4, 7, 77, 80, 1]
function Mergesort(arr)
{
    if(arr.length == 1||arr.length==0)
    {
        return arr
    }
    let mid = Math.floor(arr.length/2)

    let left =Mergesort(arr.slice(0, mid))
    let right = Mergesort(arr.slice(mid))
    return merge(left , right)
}
console.log(Mergesort(arr))