const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarkSchema = new Schema({
    PerformanceM: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },
    TestM: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },

    AssignmentM: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },
    AttandenceM: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },
    Prediction: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },
    FeedBack: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },

     TeacherId: {
         type: String,
        required: true,
        length: 255,
        trim: true,

    },
    StudentID: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },

});
module.exports = mongoose.model("Mark", MarkSchema);