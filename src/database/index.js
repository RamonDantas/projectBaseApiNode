const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ebd-mongo");
mongoose.Promise = global.Promise;

module.exports = mongoose;
