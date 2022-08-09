var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality
const parser = require('body-parser');
const verify = require(__dirname + '/verify'); // module Method #1
app.use(express.static(__dirname + "/www"));
app.use(parser.urlencoded({extended: true}));
const port = 9000;

let server = http.listen(port,function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log("Test Nodejs Server - serverside backend");
  console.log(`Server started on port ${port}`);
})

app.get('/test',function(req,res){
  res.sendFile(__dirname + '/www/test.html');
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/form.html");
    // console.log(__dirname + "/index.html");
})

app.post("/login",function(req,res){
    res.sendFile(__dirname + "/form.html");
})

app.post("/",function(req,res){
    res.sendFile(__dirname + "/www/index.html");
})

app.get('/account',(req,res)=>{
    res.send(`<h2>Andreas Tsortis</h2>
       <img src="https://images.gr-assets.com/authors/1519084181p8/16024084.jpg" alt="Andreas">
       <p>Age: 29</p>
       <p>Role: Senior Developer</p>
      `);
    // console.log(__dirname + "/index.html");
})

app.post('/form',function(req,res){
    // res.send("Thanks for Posting it");
    console.log("Form submitted");
    // res.send("Thanks for posting that!");
    console.log(req.body);
    if(!req.body){
      return res.sendStatus(400);
    }
    var user = {};
    user.email = req.body.email;
    user.password = req.body.upwd;

    let result = verify(user)

    // if(user.email == "abc@com" && user.password == "123" || user.email == "xyz@com" && user.password == "123" || user.email == "qwe@com" && user.password == "123"){
    //   user.valid = true;
    // }else{
    //   user.valid = false;
    // }
    console.log(result);

    if(result.valid){
      res.send(`<h2>Andreas Tsortis</h2>
         <img src="https://images.gr-assets.com/authors/1519084181p8/16024084.jpg" alt="Andreas">
         <p>Age: 29</p>
         <p>Role: Senior Developer</p>
        `);
    }else{
      res.sendFile(__dirname + "/www/error.html");
      // res.sendFile(__dirname + "/www/index.html");
    }


});

// app.listen(port,()=>{
//     console.log(`Server started on port ${port}`);
// })
