const express = require("express");
const router = express.Router();

const listController = require("../controllers/list.controller");
const taskController = require("../controllers/task.controller");

//test
router.get('/hellolist', listController.hello);
router.get('/hellotask', taskController.hello);

//lists
router.get('/lists',listController.displayList);
router.post('/lists',listController.addList);
router.get('/lists/:listId',listController.getOneList);
router.patch('/lists/:listId', listController.updateList);
router.delete('/lists/:listId', listController.deleteList)

//taska
router.get('/lists/:listId/tasks',taskController.displayTask);
router.post('/lists/:listId/tasks',taskController.addTask);
router.get('/lists/:listId/tasks/:taskId',taskController.getOneTask);
router.patch('/lists/:listId/tasks/:taskId',taskController.updateTask);

module.exports = router ;