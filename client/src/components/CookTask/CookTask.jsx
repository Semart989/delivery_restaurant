import CookDish from "../CookDish/CookDish";
import styles from './CookTask.module.css';

function CookTask(props) {
  return (
    <div className={styles.cookTask}>
      <h3>Order 1</h3>
      <CookDish />
      <CookDish />
      <CookDish />
    </div>
  );
}

export default CookTask;
