const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})