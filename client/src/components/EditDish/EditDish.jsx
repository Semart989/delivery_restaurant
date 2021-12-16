import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import categoriesAT from '../../redux/actionTypes/categoriesAT';
import styles from './EditDish.module.css';

function EditDish({ dish: editDish }) {
  const stateCategories = useSelector(state => state.categories.categories.categories);
  const stateCategoriesDishes = useSelector(state => state.dishes.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/categories')
      .then((res) => res.json())
      .then((categories) => dispatch({type: categoriesAT.INIT_CATEGORIES, payload: categories}));
  }, [dispatch]);

  const categoryId = useRef(null);
  
  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState('Category1');
  const [dish, setDish] = useState('Dish1');
  const arrAmount = [];
  for (let i = 0; i < 100; i += 1) {
    arrAmount.push(i + 1);
  }
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
          {stateCategories.map(item => <option value={item.name}>{item.name}</option>)}
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
