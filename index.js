const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('My first router')
})

app.get("/blog",(req,res)=>{
  res.send("Welcome to my blog")
})

const port = 4000;
app.listen(port,function(erro){
  if(erro){
    console.log("Error:",erro)
  }else{
    console.log("Server start in port: "+port)
  }
})