const express = require("express");
const productController = require("../controller/controllingproject");

const router = express.Router();

router.get("/", productController.showproduct);

module.exports = router;
