const mongoose = require('mongoose')

// db name = vinyl-api
mongoose.connect("mongodb://127.0.0.1/vinyl-api")
// mongoose.connect("mongodb://localhost/vinyl-api")

module.exports = mongoose