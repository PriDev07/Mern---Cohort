// map, filter,arrow functions

// function sum(a,b){
//     return a+b;
// }
// const sum = (a,b) => {
//     return a+b;
// }
// // both above are similar 
// let a = sum(3,4);
// console.log(a);


// Map
// given an array, give me a new array in which every value is multiplied by 2 by using map

const input = [1,2,3,4,5];
function transform(i){
    return i*2;
}
const ans = input.map(transform);
console.log(ans);
