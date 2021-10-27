var express = require("express");

var router = express.Router();



/* GET home page. */

router.get("/", function (req, res, next) {

  res.render("mydata", {

    title: "Saivivek Reddy Kusukuntla",

    fact: "I love to Vape"

  });

});



module.exports = router;