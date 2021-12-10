import TaskRoom from "../TaskRoom/TaskRoom";
import styles from './AdminTaskList.module.css';

function AdminTaskList(props) {
  const title = { 
    await: 'Задачи, ожидающие подтверждения',
    submit: 'Задачи, отправленные на кухню',
    admit: 'Исполняемые на кухне задачи',
    success: 'Исполненные кухней задачи, ожидающие подтверждения' };
  const color = {
    await: 'red',
    submit: 'blue',
    admit: 'yellow',
    success: 'green'
  }

  return (
    <div className={styles.adminTaskList}>
      <h2 className={styles.adminTaskList__title}>
        {title.submit}
      </h2>

      <div className={ styles.adminTaskList__container } style={{backgroundColor: color.submit}} >
        <TaskRoom />
        <TaskRoom />
      </div>
    </div>
  );
}

export default AdminTaskList;
