const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const { connectMongoDB } = require('./services/mongo.service');

let server;

connectMongoDB.then((res, err) => {
  if (!err) {
    console.log('Connected to MongoDB... Connecting to server');
    server = app.listen(config.port, () => {
      console.log(`Listening to port ${config.port}`);
    });
  }
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
