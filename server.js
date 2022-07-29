const express = require('express');
const connectDb = require('./config/database');
const app = express();


connectDb()
app.get('/', (req, res) => req.send(" API is runing"));


const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`Server started on port no ${PORT}`);
})