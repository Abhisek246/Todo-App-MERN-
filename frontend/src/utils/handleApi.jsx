import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const getAllTodo = (setTodo) => {
  axios.get(baseUrl)
    .then(({ data }) => {
      console.log("data = ", data);
      setTodo(data);
    })
    .catch(err => console.log(err));
};

const addTodo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/save`, { text })
    .then(({ data }) => {  // Destructuring the response to get data directly
      console.log(data);
      setText('');
      getAllTodo(setTodo);
    })
    .catch(err => console.log(err));
};

const updateTodos = (todoId, text, setText, setTodo, setIsUpdating) => {
  axios.put(`${baseUrl}/update`, { _id: todoId, text })
    .then(() => {
      setText('');
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch(err => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios.delete(`${baseUrl}/delete`, { data: { _id } })  // Correctly passing _id in the data field
    .then(() => {
      getAllTodo(setTodo);
    })
    .catch(err => console.log(err));
};

export { getAllTodo, addTodo, updateTodos, deleteTodo };
