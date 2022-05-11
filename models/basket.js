const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const basketSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }  
});

var Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;