const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductsSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    stock: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model("products", ProductsSchema)