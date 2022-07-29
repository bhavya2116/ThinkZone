const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://Bhuvaneshwari:Bhavya@21@cluster0.m0ded96.mongodb.net / ? retryWrites = true & w = majority "


const connectDb = async() => {
    try {
        await mongoose.connectDb(db)
        cosole.log("db connected successfully")
    } catch (error) {
        console.error(error.message)
    }
}
module.exports = connectDb;