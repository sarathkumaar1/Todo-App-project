const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
    },
    status: {
        type: Boolean,
        default:false
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports  = mongoose.model("Todo", todoSchema);