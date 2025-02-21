const { Router } = require("express");
const CommentController = require("../controller/CommentController.js");

const commentController = new CommentController();

const router = Router();

router.get("/comment", (req, res) => commentController.getAll(req, res));
router.get("/comment/:id", (req, res) =>
  commentController.takeOneById(req, res)
); 
router.post("/comment", (req, res) => commentController.createNew(req, res));
router.put("/comment/:id", (req, res) => commentController.update(req, res)); 
router.delete("/comment/:id", (req, res) =>
  commentController.delete(req, res)
); 

module.exports = router;
