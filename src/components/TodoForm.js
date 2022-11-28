import React, { useState, useEffect, useRef } from 'react';

export function TodoForm(props) {
  // Ref
  const inputRef = useRef(null);

  // State
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // useEffect - Initial render when page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle submit todo list
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  // Handle todo input
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className={props.edit ? 'todo-input edit' : 'todo-input'}
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        className={props.edit ? 'todo-button edit' : 'todo-button'}
        onClick={handleSubmit}
      >
        {props.edit ? 'Update Todo' : 'Add a todo'}
      </button>
    </form>
  );
}

export default TodoForm;
