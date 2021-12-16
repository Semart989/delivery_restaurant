import styles from './EditDish.module.css';
import { useState } from 'react';

function EditDish({ dish }) {
  
  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState('Category1');
  const [dish, setDish] = useState('Dish1');
  const arrAmount = [];
  for (let i = 0; i < 100; i += 1) {
    arrAmount.push(i + 1);
  }
  const arrCategories = ['Category1', 'Category2', 'Category3'];
  const arrDishes = ['Dish1', 'Dish2', 'Dish3', 'Dish4'];
  let price = 100;
  const handlerCategory = (event) => {
    const select = event.target;
    setCategory(select.value);
  }
  const handlerDish = (event) => {
    const select = event.target;
    setDish(select.value);
  }
  const handlerAmount = (event) => {
    const select = event.target;
    setAmount(select.value);
  }
  return (
    <div className={styles.dishesList}>
      <div className={styles.select}>
        <label forHtml='category' >Категория</label>
        <select className={styles.marginSelect} onChange={handlerCategory} name='category'>
          {arrCategories.map(item => <option value={item}>{item}</option>)}
        </select>
      </div>
      
      <div className={styles.select}>
        <label forHtml='dish'>Блюдо</label>
        <select className={styles.marginSelect} onChange={handlerDish} name='dish'>
          {arrDishes.map(item => <option value={item}>{item}</option>)}
        </select>
      </div>
      
      <p className={styles.margin}>Цена {price} рублей</p>

      <div className={styles.select}>
        <label forHtml='amount'>Количество</label>
        <select className={styles.marginSelect} onChange={handlerAmount} name='amount' min={1} max={100} >
          {arrAmount.map(item => <option value={item}>{item}</option>)}
        </select>
      </div>
     
      <p className={styles.margin}>Итого {amount * price} рублей</p>
      <button className={styles.button}>&times;</button>
    </div>
  );
}

export default EditDish;
