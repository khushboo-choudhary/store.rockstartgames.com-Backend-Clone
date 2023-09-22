require("dotenv").config();
const express = require("express");
const Insta = require("instamojo-nodejs");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

// const API_KEY = "test_4a5acb0fbd6da65797fdcdb6bff";
// const AUTH_KEY = "test_33f775dfb2ef8dfc3733d5115ec";

router.post("/pay", authenticate, async (req, res) => {
  try {
    const paymentData = {};
    Insta.setKeys(
      "test_4a5acb0fbd6da65797fdcdb6bff",
      "test_33f775dfb2ef8dfc3733d5115ec"
    );
    Insta.isSandboxMode(true);

    const data = new Insta.PaymentData();
    data.purpose = req.body.desc;
    data.amount = req.body.amount;
    data.buyer_name = req.user.nickName;
    data.redirect_url =
      "https://store-rockstartgames-com-frontend-clone.vercel.app/payment/successful";
    (data.email = req.user.email || "k@gmail.com"),
      (data.phone = req.user.phone || "9999999999");
    data.send_email = false;
    data.send_sms = false;
    data.webhook = `http://www.example.com/payment/webhook`;
    data.allow_repeated_payments = false;
    console.log("jqhdugyudg", data);
    Insta.createPayment(data, function (error, response) {
      if (error) {
        // some error
      } else {
        // Payment redirection link at response.payment_request.longurl
        const responseData = JSON.parse(response);
        res.status(200).send(responseData);
      }
    });
  } catch (err) {
    res.status(500).send(err.massage);
  }
});

module.exports = router;
