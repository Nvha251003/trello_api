// const express = require('express')
import express from 'express'
const app = express()

const hostname = 'localhost'
const port = 2510

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,hostname, () => {
    console.log(`listening on http://${hostname}:${port}/`);
})