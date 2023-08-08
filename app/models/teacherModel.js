const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({

  
    
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
    Password: {
        type: String,
        required: true,
        length: 255,
        trim: true,

    },
  
    DOB: {
        type: Date,
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
    StageStatus: {
        type: Boolean,
        required: true,
        length: 255,
        trim: true,

    },

});

module.exports = mongoose.model("Teacher", TeacherSchema);