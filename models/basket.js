const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const basketSchema = new Schema({
    title: {
        type: String,
        required: true
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
    },
    author: {
        type: String,
        required: true
    }
    // author:  {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: 'User'
    }
//     {collection:'Basket',
// versionKey: false //here
// }
    );


var Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;