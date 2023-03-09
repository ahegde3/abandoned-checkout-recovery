const { updateFollowUp } = require("../dbModels/followup");
const { STATUS } = require("../../constants/status");

const orderPlaced = async (token) => {
    if(!token) throw new Error("parameters missing")
  //check if there is any pending followUp for given token and update the status
  return updateFollowUp(
    { orderToken: token, status: STATUS.PENDING },
    { status: STATUS.CANCELLED }
  );
};

module.exports = { orderPlaced };
