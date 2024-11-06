// let obj = {
//     name : "Deepak Singh",
//     age: 24,
//     weight: 60,
//     height: "5ft 9in",
//     greet: function(){
//         console.log("Hello Jee kaise ho saare");
//     }
// }

// for(let key in obj){
//     console.log(key)
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj));

// Array Creation
// let arr = [1,2,3,4,5]
// console.log(arr)

// // Array Contstructor
// let brr = new Array('Deepak',1,true);
// brr.push('Singh');
// brr.pop();
// brr.shift();
// brr.unshift("Deepak Singh");
// brr.push(20)
// brr.push(40)
// brr.push(70)

// // console.log(brr.slice(2,4))
// brr.splice(1,0,'Kunal')
// console.log(brr)

// console.log(typeof(brr))


// let arr = [10,20,30]

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray =  arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray);

// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     // if(number % 2 === 0){
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
//     return number%2===0;
// })

// console.log(evenArray);

// let arr = [1,2,'deepak','kunal',null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);


// Reduce Method
// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) => {
//     return acc+curr;
// },0)

// console.log(ans)

// let arr = [9,1,7,4,2,8];

// arr.sort();
// console.log(arr)

// console.log(arr.indexOf(9));

// let arr = [10,20,30];

// let length = arr.length;
// console.log("Length: ",length);

// for(let index = 0;index< length;index++){
//     console.log(arr[index]);
// }

// arr.forEach((value,index) => {
//     console.log("Number: ", value, "Index: ", index);  
// })

// let fullName = "Deepak"

// for(let value of fullName){
//     console.log(value);
// }


let arr = [10,20,30,40,50];

function getSum(arr) {
    // let len = arr.length;
    let sum = 0;
    // for(let index=0;index<len;index++){
    //     sum = sum + arr[index];
    // }
    // return sum;

    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);  