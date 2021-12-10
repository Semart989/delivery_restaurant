import React from 'react';
import styles from './Navigation.module.css'

function Navigation(props) {
  return (
    <div className={styles.navigationBlock}>
      <div className={styles.nav}>
        <ul>
          <li>Меню1</li>
          <li>Корзина</li>
          <li>Позвонить</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
