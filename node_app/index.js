const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hi there again!!!')
})

app.listen('8080', () => {
    console.log("App running on 8080")
})