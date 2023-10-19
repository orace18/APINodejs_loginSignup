const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
    userId: { type: String, required: false },
    price: { type: Number, required: false },
});

module.exports = mongoose.model('Thing', thingSchema);