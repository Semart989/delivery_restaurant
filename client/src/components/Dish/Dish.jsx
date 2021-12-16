import styles from './Dish.module.css';


function Dish({ dish }) {
 
  return (
    <div className={styles.dishesList}>
      <p className={styles.margin}>{dish.category}</p>
      <p className={styles.margin}>{dish.name}</p>
      <p className={styles.margin}>{dish.price} рублей</p>
      <p className={styles.margin}>{dish.quantity} штук</p>
      <p>Итого {dish.quantity * dish.price} рублей</p>
    </div>
  );
}

export default Dish;
