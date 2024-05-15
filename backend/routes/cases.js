const { Router } = require("express");

const casesController = require("../controllers/casesController");

const router = Router();

router.get("/all", casesController.getAllCases);
router.post("/create", casesController.createCase);

module.exports = router;
