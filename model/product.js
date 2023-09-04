const mongoose = require('mongoose');
const { Schema } = mongoose

ProductSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [String]
    })
exports.Product = mongoose.model('users', ProductSchema);