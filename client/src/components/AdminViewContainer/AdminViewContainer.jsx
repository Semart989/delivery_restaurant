import styles from './AdminViewContainer.module.css';
import AdminTaskList from '../AdminTaskList/AdminTaskList';

const status = { 
  await: 'await',
  submit: 'submit',
  admit: 'admit',
  success: 'success',
  send: 'send' };

function ViewContainer(props) {

  return (
    <>
      <h1>Маршрут движения задач</h1>
      <section className={styles.viewContainer}>           
        <AdminTaskList status={status.await} />
        <AdminTaskList status={status.submit} />
        <AdminTaskList status={status.admit} />
        <AdminTaskList status={status.success} />
        <AdminTaskList status={status.send} />
      </section>
    </>   
  );
}

export default ViewContainer;
