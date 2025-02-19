const { Router } = require("express");
const PostController = require("../controller/PostController.js");

const postController = new PostController();

const router = Router();

// Corrigido para usar ':id' no lugar de 'id' diretamente
router.get("/post", (req, res) => postController.getAll(req, res));
router.get("/post/:id", (req, res) => postController.takeOneById(req, res)); // Aqui
router.post("/post", (req, res) => postController.createNew(req, res));
router.put("/post/:id", (req, res) => postController.update(req, res)); // Aqui
router.delete("/post/:id", (req, res) => postController.delete(req, res)); // Aqui

module.exports = router;
