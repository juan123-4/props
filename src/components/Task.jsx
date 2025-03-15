function Task({ task, deleteTask, MarkTask }) {
    return (
      <li 
        onClick={() => MarkTask(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {task.text}
        <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>❌</button>
      </li>
    );
  }
  
  export default Task;
  