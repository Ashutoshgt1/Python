// Route paramaters
var express = require('express')
var app = express();
app.get('/things/:name/:id',(req,res)=>{//things is page name 
    res.send('The id you specified is '+req.params.id+
    ' The name you specified is '+req.params.name);
});
app.listen(5000);