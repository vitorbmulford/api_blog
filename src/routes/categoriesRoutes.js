const { Router } = require("express");
const CategoryController = require("../controller/CategoryController.js");

const categoryController = new CategoryController();

const router = Router();

router.get("/category", (req, res) => categoryController.getAll(req, res));
router.get("/category/:id", (req, res) =>
  categoryController.takeOneById(req, res)
); 
router.post("/category", (req, res) => categoryController.createNew(req, res));
router.put("/category/:id", (req, res) => categoryController.update(req, res)); 
router.delete("/category/:id", (req, res) =>
  categoryController.delete(req, res)
); 

module.exports = router;
