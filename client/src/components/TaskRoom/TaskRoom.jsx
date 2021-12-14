import styles from './TaskRoom.module.css';

function TaskRoom({ order }) {
  return (
    <div className={styles.taskRoom}>
      { order.room }
    </div>
  );
}

export default TaskRoom;
