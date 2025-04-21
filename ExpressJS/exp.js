var express = require('express');
var app = express();

// Home route
app.get('/', function(req, res) {
    res.set("content-type", "text/html");
    res.send("<h1>Hello</h1>");
});

// About route
app.get('/about', (req, res) => {
    res.set("content-type", "text/html");
    res.write("Hello");
    res.write("<h1>Hello from about page</h1>");
    res.end();  // Make sure to end the response after using write
});

// Catch-all route for undefined paths (other than homepage and about page)
app.get('*', (req, res) => {
    res.status(404);
    res.set("content-type", "text/plain");
    res.send("Page not Found");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
