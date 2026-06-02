const mongoose = require("mongoose");
const env = require("dotenv").config();



async function checkConnection(userName,password){
    // db.js এর সংশোধিত লিঙ্ক
const dbUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-mtxrj3z-shard-00-00.edxjkhe.mongodb.net:27017,ac-mtxrj3z-shard-00-01.edxjkhe.mongodb.net:27017,ac-mtxrj3z-shard-00-02.edxjkhe.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-lh6g07-shard-0&authSource=admin&appName=ecommerce-website`;
    try{
        await mongoose.connect(dbUrl);
        console.log("Successfully connected to Mongodb");
    }catch(err){
        console.log(err);
    }
}

module.exports = checkConnection;
// console.log("MongoDB globally connected");