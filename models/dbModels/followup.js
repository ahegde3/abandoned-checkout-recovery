const followUpModel = require("./models/followupsModal");

const saveFollowUpInDb = (custId,orderToken,scheduleDate,status) => {

  if (custId && orderToken && scheduleDate && status) {
    const followUps= new followUpModel({
      custId,
      orderToken,
      scheduleDate,
      status
    });
   
   return  followUps.save()
  }
};


module.exports={saveFollowUpInDb}