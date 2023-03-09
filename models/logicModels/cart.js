const {saveFollowUpInDb} =require("../dbModels/followup")
const moment=require("moment")

const cartAbandoned=(custId,token)=>{
      if(!custId || !token) throw new Error("parameters missing")

      return saveFollowUpInDb(custId,token,moment().format("YYYY-MM-DD HH:mm"),"PENDING")
      

      //add to db
}


module.exports={cartAbandoned}