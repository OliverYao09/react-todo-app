import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo }) {
  // State
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>
  ));
}

export default Todo;
