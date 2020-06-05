const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('My first router')
})

app.get("/ola/:nome",(req,res)=>{
  const {nome} = req.params;
  res.send(`<h1>${nome}!</h1>`);
})

const port = 4000;
app.listen(port,function(erro){
  if(erro){
    console.log("Error:",erro)
  }else{
    console.log("Server start in port: "+port)
  }
})