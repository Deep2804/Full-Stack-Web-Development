// Function Definition
function sayMyName(){
    console.log("Deepak Singh")
}

// Function Call
sayMyName();

function CountPrint(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}

CountPrint();

function printNumber(num){
      console.log("Printing Number", num);  
}

printNumber(5);


function getAverage(num1, num2){
    let avg = (num1 + num2)/2;
    console.log("average",avg);
}

getAverage(30,70);


// return function
function SumNumber(a,b,c){
    let sum = a+b+c;
    return sum;
}

let ans = SumNumber(1,2,3);
console.log("Sum Number is",ans);

function myName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

let fullName = myName("Deepak", "Singh");
console.log("Full Name is", fullName);

let getMultiplication = function (a,b){
    return a*b;

}

let answer = getMultiplication(2,3);
console.log(answer);


let squareNumber = function(num){
    return num**2;
}

let result = squareNumber(5);
console.log(result);


// Arrow function
let Exp = (x,y) => {
    let ans =  x**y;
    return ans;
}
console.log(Exp(2,10));


