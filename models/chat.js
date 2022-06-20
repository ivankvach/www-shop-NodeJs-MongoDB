const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema ({
    author: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

var Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
