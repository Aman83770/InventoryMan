const { dbConfig } = require('./app.config');
const mongoose = require('mongoose');

const connection = mongoose.createConnection(dbConfig.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});

connection.on('connected', () => {
  console.info('Connection to mongodb open!');
});

connection.on('err', (err) => {
  console.error(`Mongoose error connection.\n ${err.stack}`);
});

connection.on('disconnected', () => {
  console.info('Mongoose connection disconnected!');
});

module.exports = connection;