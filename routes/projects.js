const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/projectController");

// Crea proyectos
// api/proyectos
router.post("/", proyectoController.crearProyecto);

module.exports = router;
