const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('My first router')
})

app.get("/hello/:nome/:sobrenome?",(req,res)=>{
  const {nome,sobrenome} = req.params;
  res.send(`<h1>${nome} ${sobrenome?sobrenome:''}!</h1>`);
})

app.get("/queryparam",(req,res)=>{
  const variable = req.query.variable;
  res.send(`<h1>${variable?variable:'Var not defined'}!</h1>`);
})

const port = 4000;
app.listen(port,function(erro){
  if(erro){
    console.log("Error:",erro)
  }else{
    console.log("Server start in port: "+port)
  }
})