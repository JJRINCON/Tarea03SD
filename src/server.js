const express = require('express')
const app = express()
const path = require('path')
//const methodOverride = require('method-override');
var bodyParser = require('body-parser')

// settings
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(methodOverride('_method'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)

//ROUTER
app.use(require('./routes/index'))

app.listen(3000, () => console.log('App run on port 3000!'))




