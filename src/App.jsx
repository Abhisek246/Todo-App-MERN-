import React, { useEffect, useState } from 'react';
import Todo from './components/Todo.jsx';
import './App.css';
import { addTodo, getAllTodo, updateTodos, deleteTodo } from './utils/handleApi.jsx';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState('');

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateTodo = (_id, text) => {
    setTodoId(_id);
    setIsUpdating(true);
    setText(text);
  };

  const handleAddOrUpdate = () => {
    if (text.trim()) {
      isUpdating ? updateTodos(todoId, text, setText, setTodo, setIsUpdating) : addTodo(text, setText, setTodo);
    }
  };

  return (
    <div className='app'>
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input 
            type="text" 
            placeholder='Add Tasks' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <div className="add" onClick={handleAddOrUpdate}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo 
              key={item._id} 
              text={item.text} 
              updateTodo={() => updateTodo(item._id, item.text)} 
              deleteTodo={() => deleteTodo(item._id, setTodo)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
