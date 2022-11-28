import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  // State
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  // Handle submit updated todo
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  // Display update input box if true
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // Render all todo list
  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    >
      <div
        key={todo.id}
        style={{ userSelect: 'none' }}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default Todo;
