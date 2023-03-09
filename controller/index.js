const express = require("express");
const router = express.Router();


router.use("/checkout",require("./checkout"))
router.use("/orders",require("./orders"))


// Default Routers
router.get("/", function (req, res) {

    res.json({
      status: "Server responding",
      time: req.body.startTimeEpoch,
    });
});


module.exports = router;
