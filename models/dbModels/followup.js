const followUpModel = require("./models/followupsModal");
const { checkObjectSanity } = require("../../helpers");

const saveFollowUpInDb = (custId, orderToken, scheduleDate, status) => {
  if (custId && orderToken && scheduleDate && status) {
    const followUps = new followUpModel({
      custId,
      orderToken,
      scheduleDate,
      status,
    });

    return followUps.save();
  }
};

const getFollowUp = async (parameter) => {
  if (checkObjectSanity(parameter)) return followUpModel.find(parameter);
};

const updateFollowUp = (selectionCriteria, updateCritera) => {
  if (
    checkObjectSanity(selectionCriteria) &&
    checkObjectSanity(updateCritera)
  ) {

    return followUpModel
      .updateMany(selectionCriteria, updateCritera,{multi:true}).catch(e=>console.log(e))
  }
};

module.exports = { saveFollowUpInDb, getFollowUp, updateFollowUp };
