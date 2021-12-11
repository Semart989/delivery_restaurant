import styles from './Dish.module.css';

function Dish(props) {
 
  return (
    <div className={styles.dishesList}>
      <p className={styles.margin}>Категория 1</p>
      <p className={styles.margin}>Блюдо 1</p>
      <p className={styles.margin}>Цена 100 рублей</p>
      <p className={styles.margin}>1 штука</p>
      <p>Итого 100 рублей</p>
    </div>
  );
}

export default Dish;
