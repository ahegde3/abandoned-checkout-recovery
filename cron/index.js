const cron = require("node-cron");
const { followUpMailing } = require("../models/logicModels/followup");

const setupAllCronJobs = () => {
  //every 30seconds
  cron.schedule("*/30 * * * *", () => {
    followUpMailing();
  });
};

module.exports = { setupAllCronJobs };
