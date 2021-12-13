import styles from './ViewContainer.module.css';
import AdminTaskList from '../AdminTaskList/AdminTaskList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ViewContainer(props) {

  const dispatch = useDispatch();
  const state = useSelector(state => state.orders.orders.orders);

  useEffect(() => {
    fetch('/order')
      .then(data => data.json())
      .then(console.log);
  });

  return (
    <>
      <h1>Маршрут движения задач</h1>
      <section className={styles.viewContainer}>
        <AdminTaskList />
        <AdminTaskList />
        <AdminTaskList />
        <AdminTaskList />
        <AdminTaskList />
      </section>
    </>   
  );
}

export default ViewContainer;
