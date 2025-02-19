const { Router } = require("express");
const CategoryController = require("../controller/CategoryController.js");

const categoryController = new CategoryController();

const router = Router();

// Corrigido para usar ':id' no lugar de 'id' diretamente nas rotas
router.get("/category", (req, res) => categoryController.getAll(req, res));
router.get("/category/:id", (req, res) =>
  categoryController.takeOneById(req, res)
); // Aqui
router.post("/category", (req, res) => categoryController.createNew(req, res));
router.put("/category/:id", (req, res) => categoryController.update(req, res)); // Aqui
router.delete("/category/:id", (req, res) =>
  categoryController.delete(req, res)
); // Aqui

module.exports = router;
