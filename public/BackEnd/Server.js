//constants
const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
//to avoid a cors error
const cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));//stuff to get bodyparser to work
app.use(bodyParser.json());//used to intercept the body of a request comming in

app.get('/', (req, res) => res.send('Hello World!'))//hello world print

app.get('/name', (req, res) => { //receiving the data from index.html and sends it to the user in /name as GET
    res.send('hello from get ' + req.query.firstname + " " + req.query.lastname); //printing to post uses .query 
    console.log(req.query.firstname + " " + req.query.lastname) //printing to post uses .query for console as well


})

app.post('/name', (req, res) => {//receiving the data from index.html and sends it to the user in /name as POST
    res.send('Hello from post ' + req.body.firstname + " " + req.body.lastname) //printing to post uses .body
    console.log(req.body.firstname + " " + req.body.lastname)//printing to post uses .body for console as well

})

app.get('/test', (req, res) => { //html form
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post ('/api/movies', (req, res) => {
    console.log("Post request being handled sucessfully");
    console.log(req.body.Title);
    console.log(req.body.Poster);
    console.log(req.body.Year);
    res.json("Post received");
   
})
app.get('/api/movies', (req, res) => { //movie json stuff
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
    res.status(200).json({
        GMovies: myMovies,
        message: 'Hello from server'
    })//sending JSON data (object, const)
})

app.get('/whatever', (req, res) => {//whatever stuff simple print
    res.send('Whatever')
})

app.get('/hello/:name', (reg, res) => { //shows name
    console.log(reg.params.name)
    res.send('hello' + reg.params.name);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))//server connection