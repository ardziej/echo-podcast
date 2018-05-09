const config = require('./modules/config/config')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const uuidv4 = require('uuid/v4')

if (app.get('env') === 'development') {
    app.locals.pretty = true
}

const preachDb = db.get('preach')
    .value()

server.listen(config.node().port, () => console.log('ECHO Podcast listening on: http://' + config.node().ip + ":" + config.node().port))

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Podcast',
        preachDb: preachDb,
        config: config
    })
})
