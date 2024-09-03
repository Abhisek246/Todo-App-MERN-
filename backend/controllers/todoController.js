const todoModel = require("../models/todoModel");

module.exports.getTodo = async(req,res)=>{
    const todos = await todoModel.find();
    res.send(todos);
}

module.exports.saveTodo = async (req,res)=>{
    const {text} = req.body;
    const data = await todoModel.create({text});
    console.log(data);
    res.send(data);
}

module.exports.updateTodo = async(req,res)=>{
    const {_id, text} = req.body;
    todoModel.findByIdAndUpdate(_id, {text})
    .then(()=> console.log("Updated successfully"))
    .catch((err)=> console.log(err));
}

module.exports.deleteTodo = async(req,res)=>{
    const {_id} = req.body;
    todoModel.findByIdAndDelete(_id)
    .then(()=> console.log("Deleted successfully"))
    .catch((err)=> console.log(err));
}