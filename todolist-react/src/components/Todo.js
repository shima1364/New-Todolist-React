import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'task todo-row complete' : 'task todo-row'} 
      key={index}
    >
      <div className="text" key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <button className="uil-trash" onClick={() => removeTodo(todo.id)}></button>
        <button className="uil-edit" onClick={() => setEdit({ id: todo.id, value: todo.text })}></button>
      </div>
    </div>
  ));
};

export default Todo;
