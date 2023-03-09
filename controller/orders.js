const express = require("express");
const router = express.Router();
 const { orderPlaced } = require("../models/logicModels/order");

router.post("/placed", (req, res) => {
    return orderPlaced(req.body.order.cart_token)
      .then((result) => {
        return res.json({});
      })
      .catch((e) => {
        
          res.statusCode=500
          return res.json({error:e.message})});
  });

module.exports=router
