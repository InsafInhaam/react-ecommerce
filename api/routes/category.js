const Category = require("../models/Category");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Category by id
router.get("/find/:id", async (req, res) => {
  try {
    const Category = await Category.findById(req.params.id);
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all Categorys
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const Categorys = query
      ? await Category.find().sort({ _id: -1 }).limit(2)
      : await Category.find();
    res.status(200).json(Categorys);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
