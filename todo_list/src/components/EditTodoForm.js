import React, { useState } from "react";

export const EditTodoForm = ({ todo, editTodo }) => {
  const [newTask, setNewTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    editTodo(newTask, todo.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

