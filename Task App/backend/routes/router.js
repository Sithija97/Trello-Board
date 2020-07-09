const express = require("express");
const router = express.Router();

const listController = require("../controllers/list.controller");
const taskController = require("../controllers/task.controller");

router.get("/hellolist", listController.hello);
router.get("/hellotask", taskController.hello);

module.exports = router ;