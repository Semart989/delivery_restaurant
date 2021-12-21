import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminOrderAT from '../../redux/actionTypes/adminOrderAT';

import styles from './CookTaskList.module.css';
import CookTask from '../CookTask/CookTask';

const title = {
  submit: 'Задачи, ожидающие подтверждения',
  admit: 'Задачи, отправленные в работу',
  success: 'Исполненные задачи'
};
const color = {
  submit: 'red',
  admit: 'yellow',
  success: 'green'
}

function CookTaskList({ status }) {

  const dispatch = useDispatch();
  const state = useSelector(state => state.adminOrders);

  useEffect(() => {
    fetch('/cook/order')
      .then(data => data.json())
      .then(orders => dispatch({type: adminOrderAT.GET_ORDERS, payload: orders.orders}));
  },[dispatch]);

  return (
    <div className={styles.cookTaskList}>
      <h2 className={styles.cookTaskList__title}>
      {title[status]}
      </h2>

      <div className={styles.cookTaskList__container} style={{ backgroundColor: color[status] }}>
        {state.orders.length && state.orders
          .filter(task => task.currentStatus === `${status}Order`)
          .map(task => <CookTask key = {task.id} order = {task} />)}
      </div>
    </div>
  );
}

export default CookTaskList;
