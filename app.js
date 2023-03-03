const express = require("express")
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");



const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];         //it possible to push into const array 
const workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {

    const day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});      // express will look into the views folder for the file list .ejs
});


app.post("/", function(req, res) {
   let item = req.body.newItem;
//    console.log(req.body); 

   if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
   } else {
    items.push(item);
    res.redirect("/");
   }



   
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work", newListItems: workItems})
});

app.get("/about", function(req, res) {
    res.render("about")
})



app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(req.body);
    res.redirect("/work");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("server running on port 3000");
});
 








// //scope
// //1st case
// function a() {
//     var x = 2;   // local to the function a
//     console.log(x); //possible
// }
// console.log(x); // not possible

// //2nd case
// var x = 2;   // global variables
// function a() {
//     console.log(x); //possible
// }

// console.log(x); // possible
// function b() {
//     console.log(x); //possible
// }


// var x = 2;

// let y = 3;

// const z = 4;  //value cannot be changed
//if we create all variables in function they are local variables (only be used inside the func)
//if we create all variables outside function they are global variables (can be used anywhere in the file)

//if we create a variable inside a for, if or else or while ( pair of {} i.e a block)
// var is global
//let is local
//const is local

