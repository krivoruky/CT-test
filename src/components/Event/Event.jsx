import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToDo } from '../AddToDo/AddToDo';
import { ToDoList } from '../ToDoList/ToDoList';
import s from './Event.module.sass';
import { clear, addToDo, deleteTodo } from '../../store/ToDoSlice';

export function Event() {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const clearTasks = () => dispatch(clear());

  const addTask = (id, time, title, description) =>
    dispatch(addToDo({ id, time, title, description }));

  const deleteTask = id => dispatch(deleteTodo({ id }));

  return (
    <div className={s.event}>
      <AddToDo addToDo={addTask} clear={clearTasks} />
      <ToDoList todo={todos} deleteTodo={deleteTask} />
    </div>
  );
}
