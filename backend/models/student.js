const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    className: String,
    age: Number,
    gender: String,
    parentPhone: String
});

module.exports = mongoose.model('Student', studentSchema);