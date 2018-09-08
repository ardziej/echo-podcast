const config = require('./modules/config/config')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('sermons.json')
const db = low(adapter)

const adapterArchive = new FileSync('sermonsArchive.json')
const dbArchive = low(adapterArchive)

const uuidv4 = require('uuid/v4')

if (app.get('env') === 'development') {
    app.locals.pretty = true
}

const sermonsDb = db.get('audio').sortBy('date').reverse().value()
const sermonsArchiveDb = dbArchive.get('audio').sortBy('date').reverse().value()

server.listen(config.node().port, () => console.log('ECHO Podcast listening on: http://' + config.node().ip + ":" + config.node().port))

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.render('index', {
        title: 'ECHO PODCASTS',
        S3: config.storage().S3,
        sermonsDb: sermonsDb,
        sermonsArchiveDb: sermonsArchiveDb,
        config: config
    })
})
