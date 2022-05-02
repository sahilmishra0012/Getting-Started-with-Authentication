const mongoose = require("mongoose");
const config = require('../config/config');
const {User} = require("../models")
let mongoClient;

var connectMongoDB = new Promise(function (resolve, reject) {
  mongoose
    .connect(config.mongoose.url, config.mongoose.options, (err)=>{
        if(err)
        reject("Cannot connect to MongoDB");
        resolve("Coonected to MongoDB");
    });
});

const getClient = () => {
  return mongoClient;
};

const pushUser = (() =>{
  const UserModel = mongoose.model('User', userSchema);
})

module.exports = {
  connectMongoDB,
  getClient,
};
