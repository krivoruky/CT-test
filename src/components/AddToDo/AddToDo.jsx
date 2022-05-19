import React from 'react';
import s from './AddToDo.module.sass';
import Button from '../UI/Button/Button';

export function AddToDo({ addToDo, clear }) {
  const submit = e => {
    e.preventDefault();
    const { title, description } = e.target;
    if (title.value === '' || description.value === '') {
      alert('Неоходимо заполнить поля!');
      return;
    }
    const time = Date.now() + 604800000;
    addToDo(Date.now(), time, title.value, description.value);
    title.value = '';
    description.value = '';
  };
  return (
    <>
      <form className={s.form} onSubmit={submit}>
        <label className={s.form}>
          <p>Название</p>
          <input name="title" type="text" />
        </label>
        <label className={s.form}>
          <p>Описание</p>
          <textarea maxLength="240" name="description"></textarea>
        </label>
        <Button />
      </form>
      <Button
        className={s.clear}
        onClick={() => clear()}
        style={{ width: '500px', height: '50px' }}
      >
        Удалить дела!
      </Button>
    </>
  );
}
