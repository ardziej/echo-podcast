'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Sermons', [{
            title: 'ECHO Elo 5',
            series: 'Doe',
            preacher: 'Daniel Rizabsłóżń',
            file: 'ecs.mp3',
            date: '2018-09-09 12:00:00',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Sermons', null, {})
    }
}