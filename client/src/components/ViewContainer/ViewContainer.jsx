import styles from './ViewContainer.module.css';
import CookTaskList from '../CookTaskList/CookTaskList';

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
          
       
        <CookTaskList status={status.submit} />
        <CookTaskList status={status.admit} />
        <CookTaskList status={status.success} />
      
      </section>
    </>   
  );
}

export default ViewContainer;
