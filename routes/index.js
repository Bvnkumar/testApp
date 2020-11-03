var express = require("express");
var router = express.Router();
var indexServices = require("../services/index");

router.post("/api/v1/parse", function (req, res, next) {
  const input = req.body;
  const data = indexServices.getV1ParseData(input);
  res.status(200).send(data);
});

router.post("/api/v2/parse", function (req, res, next) {
  const input = req.body;
  const data = indexServices.getV2ParseData(input);
  res.status(200).send(data);
});

module.exports = router;
