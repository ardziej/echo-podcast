'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sermons = sequelize.define('Sermons', {
    title: DataTypes.STRING,
    series: DataTypes.STRING,
    preacher: DataTypes.STRING,
    file: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Sermons.associate = function(models) {
    // associations can be defined here
  };
  return Sermons;
};