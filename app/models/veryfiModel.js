const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MailSchema = new Schema({
    email: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },
    number: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },

   
});
module.exports = mongoose.model("Mail", MailSchema);