const express = require('express');

const app = express();
const port = 4000;
app.listen(port,function(erro){
  if(erro){
    console.log("Error:",erro)
  }else{
    console.log("Server start in port: "+port)
  }
})