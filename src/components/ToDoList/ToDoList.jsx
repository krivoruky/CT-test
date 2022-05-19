import React from 'react';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import s from './ToDoList.module.sass';

export function ToDoList({ todo, deleteTodo }) {
  return (
    <div className={s.list}>
      {todo.length > 0 ? (
        todo.map(t => <ToDoItem deleteTodo={deleteTodo} key={t.id} {...t} />)
      ) : (
        <p className={s.note}>У Вас нет дел!</p>
      )}
    </div>
  );
}
