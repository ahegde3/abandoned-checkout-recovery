const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowUp = new Schema({
    custId:{ type: String, required: true },
    orderToken:{ type: String, required: true },
    scheduleDate:{type: Date, required: true},
    status:{ type: String, required: true },
},{collection:"followups"})


var followUpModel=mongoose.model("followUpModel",FollowUp); 

module.exports=followUpModel