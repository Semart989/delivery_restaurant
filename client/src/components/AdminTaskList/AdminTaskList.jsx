import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import adminOrderAT from '../../redux/actionTypes/adminOrderAT';

import TaskRoom from "../TaskRoom/TaskRoom";
import styles from './AdminTaskList.module.css';

const title = { 
  await: 'Задачи, ожидающие подтверждения',
  submit: 'Задачи, отправленные на кухню',
  admit: 'Исполняемые на кухне задачи',
  success: 'Исполненные кухней задачи, ожидающие подтверждения',
  send: 'Задачи на доставке' };
const color = {
  await: 'red',
  submit: 'blue',
  admit: 'yellow',
  success: 'green',
  send: 'lawnGreen'
}

function AdminTaskList( { status } ) {
 

  const dispatch = useDispatch();
  const state = useSelector(state => state.adminOrders);
  
  useEffect(() => {
    fetch('/admin/order')
      .then(data => data.json())
      .then(orders => dispatch({type: adminOrderAT.GET_ORDERS, payload: orders.orders}));
  },[dispatch]);

  return (
    <div className={styles.adminTaskList}>
      <h3 className={styles.adminTaskList__title}>
        {title[status]}
      </h3>
      <div className={ styles.adminTaskList__container } style={{backgroundColor: color[status]}}>
        {state.orders.length && state.orders
          .filter(task => task.currentStatus === `${status}Order`)
          .map(task => <TaskRoom key = {task.id} order = {task}/>)}       
      </div>
     
    </div>
  );
}

export default AdminTaskList;
