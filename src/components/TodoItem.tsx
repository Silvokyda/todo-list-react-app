import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-item">

      <div style={{ flex: '0 0 auto' }}>
        <input type="checkbox" checked={completed} onChange={onToggle} />
      </div>

 
      <div style={{ flex: '1 1 auto', padding: '10px' }}>
        <span className={completed ? 'completed' : ''}>{task}</span>
      </div>

 
      <div style={{ flex: '0 0 auto' }}>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
