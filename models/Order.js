const mongoose = require('../config/db')
const UserModel = require('./User')
const ProductModel = require('./Product')
const OrderSchema = mongoose.Schema({
    idCustomer: {
        type: String,
        ref: UserModel
    },
    items: [{
        idProduct: {
            type: String,
            ref: ProductModel
        },
        price: Number,
        quantity: Number,
        discount: Number
    }],
    date: Date
})
const OrderModel = mongoose.model('Order', OrderSchema);

OrderModel.create({
    idCustomer: '653e7162867434d14f6fee71',
    items: [{
        idProduct: '653e71fff77949444e6c916d',
        price: 980,
        quantity: 2,
        discount: 100
    }],
    date: new Date()
})

module.exports = OrderModel