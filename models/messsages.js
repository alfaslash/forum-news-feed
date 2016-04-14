var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messagesSchema = new Schema({
    author: String,
    message: String
});

module.exports = mongoose.model('Massages', messagesSchema);