const express = require('express')
const ejs = require('ejs')
const databaseModule = require('./module')
const personModule = require('./personmodule')
const userModel = require('./userModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"
const pagesDir = __dirname + "\\pages\\"
const styleDir = __dirname + "\\style\\"
const bootDir = __dirname + "\\bootstrap\\"

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())
app.set('view-engine', 'ejs')

// The get for the Bootstrap file
app.get('/bootstrap', (req, res) => {
  res.render(bootDir + 'bootstrap.min.css')
})

// This is for the EJS files to be POSTED on the server
app.get('/', function (req, res) {
  res.render(pagesDir + 'index.ejs')
})

app.get('/login', (req, res) => {
  res.render(pagesDir + 'login.ejs')
})

app.get('/register', (req, res) => {
  res.render(pagesDir + 'register.ejs')
})


app.post('/', function (req, res) {
  let person = personModule.createPerson(req.body.fname, req.body.age)
  databaseModule.storeElement(person)
  res.render(pagesDir + 'index.ejs', {
    name: "" + req.body.fname
  })
})

app.post('/register', async (req, res) => {
  let user = userModel.createUser(req.body.uName, req.body.uEmail, req.body.uPassword)
  await databaseModule.storeElement(user)
  res.redirect('/login')
})

app.post('/login', async (req, res) => {
  let user = await userModel.getUser(req.body.uName)
  if (user) {
    if (user.uPassword === req.body.uPassword) {
      res.send('Success')
    } else {
      res.send('Incorrect Password')
    }
  } else {
    res.send('User Does Not Exist')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})