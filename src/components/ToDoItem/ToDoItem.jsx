import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import Button from '../UI/Button/Button';
import s from './ToDoItem.module.sass';

export function ToDoItem({ id, time, title, description, deleteTodo }) {
  return (
    <div style={time < Date.now() ? { background: 'red' } : {}} className={s.item}>
      <p>Наименование: {title}</p>
      <p>Описание: {description}</p>
      <p>Срок: {moment.utc(time).format('lll')}</p>
      <Button onClick={() => deleteTodo(id)} style={{ width: '20px', height: '20px' }}>
        X
      </Button>
    </div>
  );
}
