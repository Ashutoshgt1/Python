// Route paramaters
var express = require('express')
var app = express();
app.get('/user/:userid/test/:test',(req,res)=>{// is page name 
    res.send(req.params);
});
app.listen(5000);