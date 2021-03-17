"use strict"
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema ({
    name : String,
    picture : String,
    price : Number,  // il campo deve essere numerico, ma se non viene inviato assegno un valore di default
    category : {type : String, enum: ['computers', 'phones', 'accessories']}, // enum mi permette accettare solo le keys specificate
    description : String
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
