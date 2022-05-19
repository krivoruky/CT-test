import React from 'react';
import Button from '../UI/Button/Button';
import s from './HomePage.module.sass';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className={s.home}>
      <Link to="/event" className={s.homeLink}>
        <Button style={{ width: '150px', height: '100px' }}>СОБЫТИЯ</Button>
      </Link>
    </div>
  );
}
