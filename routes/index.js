const {Router} = require ("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Bienvenido"));


router.post("/instrumentos", controllers.insertarInstrumento);

router.get("/instrumentos", controllers.obtenerInstrumentos);

module.exports = router;

