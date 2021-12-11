import styles from './CookTaskList.module.css';
import CookTask from '../CookTask/CookTask';

function CookTaskList(props) {
  const title = { 
    await: 'Задачи, ожидающие подтверждения',
    submit: 'Задачи, отправленные в работу',
    success: 'Исполненные задачи' };
  const color = {
    await: 'red',
    submit: 'yellow',
    success: 'green'
  }

  return (
    <div className={styles.cookTaskList}>
      <h2 className={styles.cookTaskList__title}>
        {title.await}
      </h2>

      <div className={ styles.cookTaskList__container } style={{backgroundColor: color.await}}>
        <CookTask />
        <CookTask />
        <CookTask />
      </div>
    </div>
  );
}

export default CookTaskList;
