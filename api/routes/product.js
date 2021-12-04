const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
require("dotenv").config();
const User = require("../models/User");
const Product = require("../models/Product");
const router = require("express").Router();

//Create-Product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All Products
router.get("/", async (req, res) => {
  const qnew = req.query.new;
  const qcat = req.query.cat;
  try {
    let product;
    if (qnew) {
      product = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (qcat) {
      product = await Product.find({
        categories: {
          $in: [qcat],
        },
      });
    } else {
      product = await Product.find();
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
