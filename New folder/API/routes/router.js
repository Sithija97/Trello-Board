const express = require("express");
const router = express.Router();

const listControler = require("../controllers/list.controller");

router.get("/list", listControler.readall);
router.post("/list", listControler.create);
router.get("/list/:listId", listControler.readone);
router.patch("/list/:listId", listControler.update);
router.delete("/list/:listId", listControler.delete);

module.exports = router;
