import React, { useState } from 'react';

export function TodoForm(props) {
  // State
  const [input, setInput] = useState('');

  // Handle add todo
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  // Handle Input Change
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
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
