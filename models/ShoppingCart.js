const mongoose = require("mongoose");

let ShoppingCartSchema = new mongoose.Schema({
    userprofiles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
        required: true,
    }],
    storeprofiles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StoreProfile',
        required: true,
    }],
    bill: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bill',
        required: true,
    }],
    Meals: [{
        type: Array,
        required: true,
    },],
    Price: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);