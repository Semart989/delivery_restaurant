import styles from './CookDish.module.css';

function CookDish(props) {
  return (
    <div className={styles.cookDish}>
      <p>Category 1</p>
      <p>Dish</p>
      <p>Amount: 3</p>
    </div>
  );
}

export default CookDish;
