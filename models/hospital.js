const mongoose = require('mongoose');

const hostpitalSchema = new mongoose.Schema({
    hospitalname:{
        type: String,
        required: true
    },
    huid : {
        type: Number,
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



const hospitalmodel = mongoose.model("hospital",hostpitalSchema);
module.exports = hospitalmodel;