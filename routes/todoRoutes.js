const express = require("express");
const { 
    getTodos, 
    addTodo, 
    updateTodo, 
    deleteTodo } = require("../controller/todoController");
const router = express.Router();

router.get("/get", getTodos);
router.post("/add", addTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;