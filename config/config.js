const config = require('../modules/config/config')

module.exports = {
    development: {
        username: config.db().user,
        password: config.db().password,
        database: config.db().database,
        host: config.db().host,
        port: config.db().port,
        dialect: 'mysql'
    },
    test: {
        username: config.db().user,
        password: config.db().password,
        database: config.db().database,
        host: config.db().host,
        port: config.db().port,
        dialect: 'mysql'
    },
    production: {
        username: config.db().user,
        password: config.db().password,
        database: config.db().database,
        host: config.db().host,
        port: config.db().port,
        dialect: 'mysql'
    }
}