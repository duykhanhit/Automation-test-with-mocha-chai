const express = require("express")
require('dotenv').config()
const app = express()

const connectDB = require('./config/database')

connectDB();

const api = require('./routes');

api(app);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

module.exports = server;