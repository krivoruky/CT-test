import React from 'react';
import s from './Input.module.sass';

export default function Input({ children, ...props }) {
  return (
    <Input {...props} className={s.input}>
      {children ?? 'Добавить!'}
    </Input>
  );
}
