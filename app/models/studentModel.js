const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    Name: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },
    Email: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },

    Dob: {
        type: Date,
        required: true,
        length: 255,
        trim: true,

    },
    Iq: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },
    Quiz: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },
    ParentQ: {
        type: Number,
        required: true,
        length: 255,
        trim: true,

    },
    Role: {
        type: Boolean,
        required: true,
        length: 255,
        trim: true,

    },
    Gender: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },
    StageStatus: {
        type: Boolean,
        required: true,
        length: 255,
        trim: true,

    },
    LevelStatus: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },

    Password: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },

    TeacherID: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },

});
module.exports = mongoose.model("Student", StudentSchema);