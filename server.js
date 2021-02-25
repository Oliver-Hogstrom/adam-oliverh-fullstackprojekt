const express = require('express')
const ejs = require('ejs')
const databaseModule = require('./module')
const personModule = require('./personmodule')
const userModel = require('./userModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"
const pagesDir = __dirname + "\\pages\\"

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())
app.set('view-engine', 'ejs')

// This is for the EJS files to be POSTED on the server
app.get('/', function (req, res) {
  res.render(pagesDir + 'index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})