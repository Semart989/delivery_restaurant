import TaskRoom from "../TaskRoom/TaskRoom";
import styles from './AdminTaskList.module.css';

function AdminTaskList(props) {
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

  return (
    <div className={styles.adminTaskList}>
      <h2 className={styles.adminTaskList__title}>
        {title.await}
      </h2>

      <div className={ styles.adminTaskList__container } style={{backgroundColor: color.send}}>
        <TaskRoom />
        <TaskRoom />
      </div>
    </div>
  );
}

export default AdminTaskList;
