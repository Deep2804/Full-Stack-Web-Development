// compile time error
// syntax error
// console.log(1;

// Runtime error
// compile time



// try{
//     console.log("Try Block Start Here");
//     console.log(x);
//     console.log("Try Block End Here");
// }
// catch(err){
//     // define kerte hai,aap error ke sath kya kerna chahte ho
//     // retry logic
//     // fallback mechanism
//     // custom error
//     console.log("I am inside catch block");
//     console.log("Your error is here:",err);
// }
// finally{
//     console.log("I will run everytime as I am into Finally block");
// }


// // Lets create a custom error
// try{
//     // Reference error
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai pehle declare karo,fer print kerna");
// }


let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}