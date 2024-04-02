const express = require("express");
const app = express();
const users = [{
    name: "Priyanshu",
    kidneys: [{
        healthy: false
    }]
}];
app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberofkidneys = kidneys.length;
    console.log(numberofkidneys);
})
app.listen(3000)