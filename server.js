var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality
app.use(express.static(__dirname + "/www"));
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

// app.listen(port,()=>{
//     console.log(`Server started on port ${port}`);
// })
