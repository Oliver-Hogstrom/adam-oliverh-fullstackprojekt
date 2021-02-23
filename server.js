const express = require('express')
const ejs = require('ejs')
const databaseModule = require('./module.js')
const userModel = require('./userModel')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.static(clientDir))
app.use(express.json())
app.use(express.urlencoded())
app.set('view-engine', 'ejs')


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})