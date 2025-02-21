const { Router } = require("express");
const CommentController = require("../controller/CommentController.js");

const commentController = new CommentController();

const router = Router();

// Corrigido para usar ':id' no lugar de 'id' diretamente nas rotas
router.get("/comment", (req, res) => commentController.getAll(req, res));
router.get("/comment/:id", (req, res) =>
  commentController.takeOneById(req, res)
); // Aqui
router.post("/comment", (req, res) => commentController.createNew(req, res));
router.put("/comment/:id", (req, res) => commentController.update(req, res)); // Aqui
router.delete("/comment/:id", (req, res) =>
  commentController.delete(req, res)
); // Aqui

module.exports = router;
