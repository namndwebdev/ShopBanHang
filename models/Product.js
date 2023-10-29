const mongoose = require('../config/db');
const UserModel = require('./User');
const ProductSchema = mongoose.Schema({
    name: String,
    images: [String],
    price: Number,
    vote: [{
        idUser: {
            type: String,
            ref: UserModel
        },
        star: Number
    }],
    tags: [String],
    inentory: Number,
})
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel