const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/projectController");
const auth = require("../middleware/auth");

// Crea proyectos
// api/proyectos
router.post("/", auth, proyectoController.crearProyecto);
router.get("/", auth, proyectoController.crearProyecto);

module.exports = router;
