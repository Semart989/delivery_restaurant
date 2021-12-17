import styles from './Dish.module.css';


function Dish({ dish }) {
 
  return (
    <div className={styles.dishesList}>
      <p>{dish.category}</p>
      <p>{dish.name}</p>
      <p>{dish.price} рублей</p>
      <p>{dish.quantity} штук</p>
      <p>Итого {dish.quantity * dish.price} рублей</p>
    </div>
  );
}

export default Dish;
