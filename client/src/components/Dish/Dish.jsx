import styles from './Dish.module.css';

function Dish(props) {
  return (
    <div className={styles.dishesList}>
      <p>Блюдо 1</p>
      <p>Цена 100 рублей</p>
      <p></p>
      <label forHtml='amount'>Количество</label>
      <input name='amount' min={1} max={50} >
      </input>
      <p>Итого 300 рублей</p>
    </div>
  );
}

export default Dish;
