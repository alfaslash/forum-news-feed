var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messagesSchema = new Schema({
    author: String,
    text: String,
    id: Number
});

module.exports = mongoose.model('Messages', messagesSchema);