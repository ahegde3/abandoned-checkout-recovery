const express = require("express");
const router = express.Router();
 const { cartAbandoned} = require("../models/logicModels/cart");

router.post("/cartAbandoned", (req, res) => {
    return cartAbandoned(req.body.customer.id,req.body.cart_token)
      .then((result) => {
        return res.json({});
      })
      .catch((e) => {
          res.statusCode=500
          return res.json({error:e.message})});
  });

module.exports=router
