import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: { task: string; completed: boolean }[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task.task}
          completed={task.completed}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
