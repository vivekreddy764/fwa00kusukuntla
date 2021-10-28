var express = require("express");
var router = express.Router();
var n1;
var imul;
var log;
var log10;

/* GET users listing. */

router.get("/", function (req, res, next) {
  n1 = Math.random() * (100 - 1) + 1;
  n2 = Math.random() * (100 - 1) + 1;

  imul = Math.imul(n1, n2);

  log = Math.log(n1);

  log10 = Math.log10(n1);

  res.send(`(imul) applied to (${n1}, ${n2}) is ${imul} <br>

            (log) applied to (${n1}) is ${log} <br>

            (log10) applied to (${n1}) is ${log10}`);
});

module.exports = router;