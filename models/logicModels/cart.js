const {saveFollowUpInDb} =require("../dbModels/followup")
const moment=require("moment")

const cartAbandoned=(custId,token)=>{
      if(!custId || !token) throw new Error("parameters missing")
      const actionTimeStamp = Date.now();
      const delay=["0.5","24","72"]

   const promiseList= Array(3).fill(0).map((_,i)=>saveFollowUpInDb(custId,token,moment(actionTimeStamp).add(delay[i],"hours").format("YYYY-MM-DD HH:mm"),"PENDING"))
   return Promise.allSettled(promiseList)
     // return saveFollowUpInDb(custId,token,moment(actionTimeStamp).format("YYYY-MM-DD HH:mm"),"PENDING")
      

      //add to db
}


module.exports={cartAbandoned}