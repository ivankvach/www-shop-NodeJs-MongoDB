const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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

var Products = mongoose.model('Product', productSchema);

module.exports = Products;