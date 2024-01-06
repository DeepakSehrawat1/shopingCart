const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.get("/", productController.showproduct);

module.exports = router;
