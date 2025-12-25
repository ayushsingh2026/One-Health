const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
    labname:{
        type: String,
        required: true
    },
    city : {
        type : String,
        required : true
    },

    state : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    password :{
        required:true,
        type: String
    }
});



const labmodel = mongoose.model("lab",labSchema);
module.exports = labmodel;