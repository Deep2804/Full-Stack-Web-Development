// Global Scope

// var age = 22;
// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// for(let i=0;i<2;i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log("Hi",age);
// }

// sayHello();

// Function Scope
function sayHello(){
    var name = "Earth";
    console.log("Hello Dunia", name);
}

sayHello();

// Block Scope
console.log(height);
{
    var height = 180;
}
console.log(height);

{
    let age = 23;
}
console.log(age);


// Temporal Dead Zone
console.log(marks);
const marks = 90;
console.log(marks);
