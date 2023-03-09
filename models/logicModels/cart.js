const {saveFollowUpInDb} =require("../dbModels/followup")
const {STATUS} =require("../../constants/status")
const {DATE_FORMAT,DELAYS,TIME_UNIT}= require("../../constants/time")
const moment=require("moment")

const cartAbandoned=(custId,token)=>{
      if(!custId || !token) throw new Error("parameters missing")
      const actionTimeStamp = Date.now();

   const promiseList= Array(3).fill(0).map((_,i)=>saveFollowUpInDb(custId,token,moment(actionTimeStamp).add(DELAYS[i],TIME_UNIT.HOURS).format(DATE_FORMAT),STATUS.PENDING))
   return Promise.allSettled(promiseList)
}


module.exports={cartAbandoned}