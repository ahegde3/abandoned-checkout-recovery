const cron = require("node-cron");
const {followUpMailing} =require("../models/logicModels/followups")


exports.setupAllCronJobs = () => {
    cron.schedule("*/30 * * * *", () => {
      followUpMailing();
    });
  
  };