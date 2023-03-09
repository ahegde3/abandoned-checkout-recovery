const { getFollowUp, updateFollowUp } = require("../dbModels/followup");
const { sendCommunication } = require("../../services/communication");
const {STATUS} =require("../../constants/status")
const {DATE_FORMAT}=require("../../constants/time")
const moment = require("moment");

const followUpMailing = async () => {
  const pendingFollowUps = await getFollowUp({ status: STATUS.PENDING });
  const currentTimeStamp = moment(Date.now()).format(DATE_FORMAT);

  const sendCommunicationPromiseList = [];
  pendingFollowUps.forEach((followUp) => {

    if (
      moment(followUp.scheduleDate).format(DATE_FORMAT) <=
      currentTimeStamp
    )
      sendCommunicationPromiseList.push(
        sendCommunication(followUp._id, followUp.custId, followUp.orderToken)
          .then((res) =>
            updateFollowUp({ _id: res.id }, { status: STATUS.COMPLETED })
          )
          .catch((e) => 
            updateFollowUp({ _id: e.id }, { status:STATUS.FAILED}))
      );
  });

  return Promise.allSettled(sendCommunicationPromiseList);
};

module.exports = { followUpMailing };
