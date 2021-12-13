import styles from './ViewContainer.module.css';
import AdminTaskList from '../AdminTaskList/AdminTaskList';

function ViewContainer(props) {
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
