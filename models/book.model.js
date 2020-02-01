const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    count: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);