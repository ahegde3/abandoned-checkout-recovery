const { getFollowUp, updateFollowUp } = require("../dbModels/followup");
const { sendCommunication } = require("../../services/communication");
const moment = require("moment");

const followUpMailing = async () => {
  const pendingFollowUps = await getFollowUp({ status: "PENDING" });
  const currentTimeStamp = moment(Date.now()).format("YYYY-MM-DD HH:mm");

  const sendCommunicationPromiseList = [];
  pendingFollowUps.forEach((followUp) => {

    if (
      moment(followUp.scheduleDate).format("YYYY-MM-DD HH:mm") <=
      currentTimeStamp
    )
      sendCommunicationPromiseList.push(
        sendCommunication(followUp._id, followUp.custId, followUp.orderToken)
          .then((res) =>
            updateFollowUp({ _id: res.id }, { status: "COMPLETED" })
          )
          .catch((e) => updateFollowUp({ _id: res.id }, { status: "FAILED" }))
      );
  });

  return Promise.allSettled(sendCommunicationPromiseList);
};

module.exports = { followUpMailing };
