
function getAge(){
    return 190;
}

function utility(name,age = getAge()){
    console.log(name," ",age);
}

utility("Deepak",23);
utility("Deepak");
utility();



// function sayName(myName = "Prabhu Deva"){
//     console.log("My Name is", myName);
// }

// sayName("Deepak");

// function sayName(fName,lName){
//     console.log("My Name is", fName," ",lName);
// }

// sayName("Deepak","Singh");

// function sayName(fName="Uday",lName=fName.toUpperCase()){
//     console.log("My Name is: ",fName," ",lName);
// }
// sayName("Deepak");

// function solve(value= {age: 15, wt:90,ht:190}){
//     console.log("Hello Ji", value);
// }

// function solve1(value= ["Deepak", "Rahul", "Kunal"]){
//     console.log("Hello Ji", value);
// }

// function solve(value="Rahul"){
//     console.log("Hello Ji", value);
// }

// solve(undefined);
// solve("Deepak");
// solve();
// solve1();

// class Human{
//     // properties
//     age; // public
//     #weight=60; // private
//     height= 160; 

//     constructor(newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.height = newHeight;
//         this.#weight = newWeight;
//     }

//     // behavior
//     walking(){
//         console.log("I am Walking", this.#weight);
//     }
//     running(){
//         console.log("I am Running");
//     }

//     get fetchWeight(){
//         return this.#weight;
//     }
//     set modifyWeight(val){
//         this.weight = val;
//     }
// }

// let obj = new Human(50,190,101);
// console.log(obj.fetchWeight);

// obj.walking();