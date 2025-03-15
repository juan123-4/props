import { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText(''); // se  Limpiar el input después de añadir algo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default AddTaskForm;
