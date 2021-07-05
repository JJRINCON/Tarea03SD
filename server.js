const postService = require('./services/postService.js')
const getService = require('./services/showDataService.js')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const { get } = require('http')
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.post('/addName', (req,res) =>  postService.addName(req, res))

app.get('/', (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.get('/showData', (req, res) => getService.showData(req,res));

app.get('/addName', (req, res) => res.sendFile(__dirname + "/public/addName.html"));