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

server.listen(config.node().port, () => console.log('ECHO Podcast DB listening on: http://' + config.node().ip + ":" + config.node().port))

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/init', function (req, res) {

})

/*
// Set some defaults (required if your JSON file is empty)
db.defaults({preach: []})
    .write()
*/

db.get('preach')
    .push({
        uuid: uuidv4(),
        title: 'ECHO 1',
        description: '',
        series: 'ZAPLĄTANI',
        preacher: 'Daniel Różański',
        date: '2018-01-07',
        file: 'start_1.mp3',
    })
    .write()
/*
// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()

// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()
  
// Increment count
db.update('count', n => n + 1)
  .write()
*/
