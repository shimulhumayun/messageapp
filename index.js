var express= require("express");
var bodyParser=require("body-parser");
var session=require("cookie-session");
var fs = require('fs');
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var file = 'user.json'
var content = fs.readFileSync('user.json');
//console.log(content);
var contentsArray=JSON.parse(content);
app.set('view engine', 'ejs');
app.get("/",function(req,res){
  //res.render("index");
  res.render("index",{contentsArray:contentsArray});
})

app.post("/add",function(req,res){
  var name=req.body.username;
  //var obj ={};
  //obj[name]=req.body.usermessage;
  contentsArray[name]=req.body.usermessage;;
  res.redirect("/");

})
app.listen(3000,function(){
    console.log("Server has started")
});


//message.append()
