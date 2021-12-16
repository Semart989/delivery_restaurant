import styles from './CookDish.module.css';

function CookDish({dish}) {
  return (
    <div className={styles.cookDish}>
      <p>{dish.category}</p>
      <p>{dish.name}</p>
      <p>{dish.quantity && `Количество: ${dish.quantity} штук`}</p>
    </div>
  );
}

export default CookDish;
