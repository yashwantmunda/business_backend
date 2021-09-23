const mongoose = require('mongoose');
const BusinessSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    category:{type:String, required: true},
    size:{type:String,required: true},
    owner:{type:String, required: true},
    phone:{type: String, required: true},
    email: {type: String, required: true},
    location:{type: String, required:true},
    description:{type:String,required: true},
    address:{
        street: {type: String, required: true},
        city:{type:String, required: true},
        state:{type:String, required: true},
        zipCode:{type:String, required: true},
        country: {type:String, required: true}
    }
},{timeStamp: true})




const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business