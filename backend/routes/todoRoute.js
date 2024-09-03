const express = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
const router = express.Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.put('/update', updateTodo);
router.delete('/delete', deleteTodo);


module.exports = router;