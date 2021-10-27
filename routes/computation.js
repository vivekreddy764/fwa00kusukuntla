var express = require("express");
var router = express.Router();
var rno;
var imul;
var log;
var log10;

/* GET users listing. */

router.get("/", function (req, res, next) {
  rno = Math.log() * (100 - 1) + 1;
  rno1 = Math.log() * (100 - 1) + 1;

  imul = Math.imul(rno, rno1);

  log = Math.log(rno);

  log10 = Math.log10(rno);

  res.send(`(imul) applied to (${rno}, ${rno1}) is ${imul} <br>

            (log) applied to (${rno}) is ${log} <br>

            (log10) applied to (${rno}) is ${log10}`);
});

module.exports = router;