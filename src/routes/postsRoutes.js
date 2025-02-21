const { Router } = require("express");
const PostController = require("../controller/PostController.js");

const postController = new PostController();

const router = Router();

router.get("/post", (req, res) => postController.getAll(req, res));
router.get("/post/:id", (req, res) => postController.takeOneById(req, res)); 
router.post("/post", (req, res) => postController.createNew(req, res));
router.put("/post/:id", (req, res) => postController.update(req, res)); 
router.delete("/post/:id", (req, res) => postController.delete(req, res)); 

module.exports = router;
