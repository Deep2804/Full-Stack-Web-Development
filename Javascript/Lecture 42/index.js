// Loops
// 1. For loop
// 2. while loop
// 3. Do-while Loop
// 4. For Each Loop
// 5. For in Loop
// 5. For of Loop

// For Loop
// for(let i =1;i<=10;i++){
//     console.log("Deepak");
// }

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=5;i>=1;i--){
//     console.log(i);
// }

// for(let i=1;i<6;i++){
//     if(i == 4){
//         break;
//     }
//     else {
//         console.log(i);
//     }
// }

// for(let i=1;i<6;i++){
//     if(i == 4){
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }


// while Loop
// let i = 1;
// while(i<=10){
//     console.log("Deepak");
//     i++;
// }

// let i=1;
// while(i<=6){
//     console.log(i);
//     i++;
// }

// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i=1;
// while(i<6){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
//     i++;
// }

// let i=1;
// while(i<6){
//     if(i==4){
//         i++;
//         continue;
//     }
//     else
//         console.log(i);
//     i++;
// }


// Do-while Loop
// let i = 1;
// do{
//     console.log("Deepak");
//     i++;
// } while(i<=10)

// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i<=5)

// let i = 5;
// do{
//     console.log(i);
//     i--;
// } while(i>=1)


// // String
// let firstName = "Deepak"
// let lastName = 'Singh'

// console.log(typeof(firstName));

// let name = `Deepak
// Singh This is my Name hello`;
// console.log(name);


// let firstName = new String("Deepak Singh");
// console.log(firstName);

// // Operations on String
// let op1 = 'English'
// let op2 = 'HINDI'

// console.log(op2.length);
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());

// let ans = op1 + op2; 
// console.log(ans);

// let finalAns = `${op1} ${op2}`

// let str = "Deepak";
// console.log(str.substring(2,4));

// let sentence = "Hello jee kaise ho saare"
// let words = sentence.split(' ');
// console.log(words);


let sentence = "Hello \\jee \\kaise \\ho \\saare"
let words = sentence.split('\\');
console.log(words);

console.log(words.join(','));


