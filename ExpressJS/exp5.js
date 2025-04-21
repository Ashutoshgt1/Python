// sending a JSON response
// res.json({username:'xyz'})
// or 
// res.send(JSON.stringify({username:'xyz'}));
// write a express js script to req server to display json obj value on browser
var express = require('express')
var app = express();
j={name:"A",
    rollno:30,
    marks:24
}
app.get('/',(req,res)=>{// is page name 
    // res.write("Name: "+j.name+"\n")
    // res.write("marks: "+j.marks);
    //res.send(j);
    res.write(JSON.stringify(j));
    res.send()
});
app.listen(5000);