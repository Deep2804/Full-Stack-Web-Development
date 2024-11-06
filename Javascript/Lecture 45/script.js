
// var age;
// console.log(age);

// var age = 25;



// // sayMyName("Deepak Singh")

// function sayMyName(finalName){
//     console.log(finalName);
// }

let obj = {
    age: 25,
    wt: 60,
    ht: 170,
    greet: () => {
        console.log("Hello Dunia");
    }
}

console.log(obj.age);
obj.greet();



const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let first = arr[2];
let ans = first(5,10);
console.log(ans);


// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);



// function greetMe(greet,fullName){
//     console.log("Hello", fullName);
//     greet();
// }


// function greet(){
//     console.log("Greeting of the Day");
// }

// greetMe(greet,"Deepak");

// class Human{

// }

// let obj1 = new Human();

