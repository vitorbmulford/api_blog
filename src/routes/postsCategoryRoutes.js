const { Router } = require("express");
const PostCategoryController = require("../controller/PostCategoryController.js");

const postCategoryController = new PostCategoryController();

const router = Router();

router.get("/post-categories", (req, res) => postCategoryController.getAll(req, res));
router.get("/post-categories/:id", (req, res) => postCategoryController.takeOneById(req, res)); 
router.post("/post-categories", (req, res) => postCategoryController.createNew(req, res));
router.put("/post-categories/:id", (req, res) => postCategoryController.update(req, res)); 
router.delete("/post-categories/:id", (req, res) => postCategoryController.delete(req, res)); 

module.exports = router;
