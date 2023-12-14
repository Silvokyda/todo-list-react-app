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
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span className={completed ? 'completed' : ''}>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
