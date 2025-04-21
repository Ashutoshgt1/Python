var express = require('express');
    var app = express();
     app.get('/',function(req,res){
        res.set("content-type","text/plain");
        res.send("<h1>Hello</h1>");
     }
    );
     app.get('/about',(req,res)=>{
        res.set("content-type","text/html");
        res.write("Hello");
        res.write("<h1>Hello from about page</h1>");
        res.send();//We cannot write anything is send() if you have written write()
     }
    );
    app.get('*',(req,res)=>{
        res.status(404);
        res.set("content-type","text/plain");
        res.send("Page  not Found");
        // or we can write as res.status(404).send("Page not Found");
     }
    );
    app.listen(5000);

