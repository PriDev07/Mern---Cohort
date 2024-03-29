// // String length
// const str = "Jai shree ram";
// function getLength(str){
//     console.log("original string : ", str);
//     console.log("String size : ", str.length);
// }
// getLength(str);

// // find index of 
// function findindexof(str){
//     console.log(str.indexOf("ram"));
// }
// findindexof(str);

// // slice : give only between of index
// function getslice(str){
//     console.log(str.slice(0,9)); // output of str from 0 to 8(not include 9)
// }
// getslice(str);

// // replace : replace string part with some other string 
// function strreplace(str){
//     console.log(str.replace("ram","Hanuman"))
// }
// strreplace(str);

// //split: split string to array index based on desired input
// function strsplit(str){
//     console.log(str.split(" "));
// }
// strsplit(str);

// // trim : trimmed out extra spaces from beginning and ending of string
// function strtrim(str){
//     console.log(str.trim());
// }
// strtrim(str);

// Numbers
// var a="33koti"
// // parseInt : convert string to integer remove all chars, parseFloat: same as parseInt
// function checkparint(a){
//     console.log(parseInt(a));
// }
// checkparint(a);


//Array
// forEach: to pass array values in any function one by one
// const initArray=[1,5,2];
// function freach(str){
//     console.log(str + "is checking for forEach");
// }
// initArray.forEach(freach);

// // Classes: Gave out a structure for reusability just like blurprint of any code
// class Animal {
//     constructor(name, legcount, speaks){
//         this.name = name;
//         this.legcount = legcount;
//         this.speaks = speaks;
//     }
// }
// let dog = new Animal("Dog",2,"bhow bhow");
// console.log(dog);

// Date : to get time
// const currrentDate= new Date();
// console.log(currrentDate.getFullYear());// there are many functions like getDate,getMonth,getFullYear,,getHours,getMinutes,getSeconds,getMilliseconds,etc etc.