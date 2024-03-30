// Revision class
// Callback : call function as a argument in another function 
function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
function getSum(a,b,cb){// cb is a callback function
    let x=cb(a);
    let y=cb(b);
    return x+y;
}
console.log(getSum(6,10000,cube)); // Third argument is callback argument