const express = require('express')
const app = express()
const redditRouter = require('./controllers/reddit')
const hackernewsRouter = require('./controllers/hackernews')
const codeforcesRouter = require('./controllers/codeforces')
const stackexchangeRouter = require('./controllers/stackexchange')
const devrantRouter = require('./controllers/devrant')
const config = require('./utils/config');
const mongoose = require('mongoose')
const cors = require("cors");
const logger = require("morgan");
const path = require('path');
const url = config.MONGODB_URI
console.log('Connecting to MongoDB')

mongoose
    .connect(url)
    .then((res) => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
    })

app.use(express.static('build'))
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/reddit', redditRouter)
app.use('/hackernews', hackernewsRouter)
app.use('/codeforces', codeforcesRouter)
app.use('/stackexchange', stackexchangeRouter)
app.use('/devrant', devrantRouter)

app.use('*', (request, response) => {
    response.status(404).send({ error: 'Not a valid Route' })   
})

module.exports = app