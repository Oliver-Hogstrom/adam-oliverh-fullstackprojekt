const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs')
const ejs = require('ejs')
const databaseModule = require('./module')
const userModel = require('./userModel')
const formModel = require('./formModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"
const styleDir = __dirname + "\\style\\"

app.use(express.static(clientDir))
app.use(express.static(styleDir))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')


// This is for the EJS files to be GET on the server
app.get('/', function (req, res) {
  res.render('./pages/index.ejs')
})

app.get('/login', (req, res) => {
  res.render('./pages/login.ejs')
})

app.get('/register', (req, res) => {
  res.render('./pages/register.ejs')
})

app.get('/vinyl', (req, res) => {
  res.render('./pages/vinyl.ejs')
})

app.get('/contact', (req, res) => {
  res.render('./pages/contact.ejs')
})

app.get('/purpose', (req, res) => {
  res.render('./pages/purpose.ejs')
})


app.post('/register', async (req, res) => {
  const hasedPassword = await bcrypt.hash(req.body.password, 10)
  userModel.saveUser(req.body.name, hasedPassword)
  res.redirect('/login')
})

app.post('/login', async function(req, res) {
  const user = await userModel.getUser(req.body.name)
  await bcrypt.compare (req.body.password, user.password, (err, success) =>{
    if (err) {
      console.log(err);
    }
    if (success){
      console.log("Succes")
      res.redirect('/')
    } 
    else {
      console.log("Fail")
      res.redirect('/register')
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})