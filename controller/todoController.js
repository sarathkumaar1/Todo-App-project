const Todo = require("../models/todoModel.js")
module.exports ={
    getTodos: async (req, res) =>{
        try {
           const todos = await Todo.find().sort({ createdAt: -1})
           return res.status(200).json({ todos })
        } catch (error) {
            return res.status(500).json({ error })
        }
        
    },
    addTodo: async (req, res) =>{
        try {
            const createTodo = new Todo({
                todo: req.body.todo,
            });
            await createTodo.save();
            return res.status(200).json({ createTodo});
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    updateTodo: async (req, res) => {
        try {
            const isTodo = await Todo.findByIdAndUpdate(req.params.id,
                {status: req.body.status},
                 {new: true }
                );
                return res.status(200).json({ isTodo });
        } catch (error) {
             return res.status(500).json({ error })
        }
    },
    deleteTodo: async (req, res) =>{
        try {
            await Todo.findByIdAndDelete( req.params.id    );
                return res.status(200).json("Todo is deleted");
        } catch (error) {
             return res.status(500).json({ error })
        }
    },
}  