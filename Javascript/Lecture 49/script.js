let obj = {
    age:12,
    wt:68,
    ht:180
};

// console.log(obj);

// obj.color = "White";

// console.log(obj);

// Object Cloning using spread operator
// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest = {...src};


// src.age = 112;
// console.log(src);
// console.log(dest);


// Object Cloning using assign 
// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let src2  = {
//     value: 101,
//     name: "Deepak Singh"
// }

// let dest = Object.assign({}, src,src2);

// console.log(src);
// console.log(dest);

// Object Cloning using Iteration
let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {};

for(let key in src){
    let newKey = key;
    let newVal = src[key];
    // insert newKey and value in dest and create a clone
    dest[newKey] = newVal;
}
src.age = 90;
console.log(src);
console.log(dest);

