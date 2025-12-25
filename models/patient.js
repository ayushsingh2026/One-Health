const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    
    username:{
        type: Number,
        required: true
    },
    country : {
        type: String
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


const patientModel = mongoose.model("patient", patientSchema);

module.exports = patientModel;