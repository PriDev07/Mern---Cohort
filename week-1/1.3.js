// String length
const str = "Jai shree ram";
function getLength(str){
    console.log("original string : ", str);
    console.log("String size : ", str.length);
}
getLength(str);

// find index of 
function findindexof(str){
    console.log(str.indexOf("ram"));
}
findindexof(str);

// slice : give only between of index
function getslice(str){
    console.log(str.slice(0,9)); // output of str from 0 to 8(not include 9)
}
getslice(str);

// replace : replace string part with some other string 
function strreplace(str){
    console.log(str.replace("ram","Hanuman"))
}
strreplace(str);

//split: split string to array index based on desired input
function strsplit(str){
    console.log(str.split(" "));
}
strsplit(str);

// trim : trimmed out extra spaces from beginning and ending of string
function strtrim(str){
    console.log(str.trim());
}
strtrim(str);