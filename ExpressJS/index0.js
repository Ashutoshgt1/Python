var express = require('express');
    var app = express();
     app.get('/',function(req,res){
        res.write("Hello World")
        res.send()
     }
    );
    app.listen(5000);

