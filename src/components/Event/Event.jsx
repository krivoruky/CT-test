import React, { useState } from 'react';
import { AddToDo } from '../AddToDo/AddToDo';
import { ToDoList } from '../ToDoList/ToDoList';
import s from './Event.module.sass';

export function Event() {
  const [todo, setTodo] = useState([
    { id: 1, time: 1653965059000, title: 'машина', description: 'поменять сайлентблоки' },
    { id: 2, time: 1652934059000, title: 'велосипед', description: 'поставить детское кресло' },
    { id: 3, time: 1622965059000, title: 'дом', description: 'установить кондиционер' },
    { id: 4, time: 1652465059000, title: 'дом', description: 'пропылесосить' }

  ]);

  const addToDo = (id, time, title, description) => {
    setTodo(prev => [...prev, { id, time, title, description }]);
  };

  const deleteTodo = id => {
    setTodo(prev => prev.filter(t => t.id !== id));
  }

  const clear = () => {
    setTodo([]);
  }
  return (
    <div className={s.event}>
      <AddToDo addToDo={addToDo} clear={clear}/>
      <ToDoList todo={todo} deleteTodo={deleteTodo}/>
    </div>
  )
}
