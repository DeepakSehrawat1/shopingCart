const express = require("express");

const productController = require("../controller/controllingproject");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productController.getproduct);

// /admin/add-product => POST
router.post("/add-product", productController.addproduct);

module.exports = router;
