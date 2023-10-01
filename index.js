var express = require('express')

const SERVER_PORT = 3000

var app = express()

app.get("/hello", (req,res) => {
    res.send("<h1>Hello Express JS</h1>")
})

app.get("/user", (req,res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname

    const user = {
        firstname: firstname,
        lastname: lastname
    };
    res.json(user); 
        
})

app.get("/user/:fname/:lname", (req, res) => {

    const {fname, lname} = req.params
    const user = {
        firstname: fname,
        lastname: lname
    };

    res.json(user)

})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})