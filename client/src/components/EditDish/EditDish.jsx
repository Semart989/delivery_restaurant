import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import categoriesAT from '../../redux/actionTypes/categoriesAT';
import styles from './EditDish.module.css';
import adminOrderAT from '../../redux/actionTypes/adminOrderAT';

function EditDish({ dish, index, order }) {
  // const state = useSelector(state => state.adminOrders.orders[order.id]);
  // const stateDishes = useSelector(state => state.adminOrdersDishes);
  // const stateCategoriesDishes = useSelector(state => state.dishes.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/categories')
      .then((res) => res.json())
      .then((categories) => dispatch({type: categoriesAT.INIT_CATEGORIES, payload: categories}));
  }, [dispatch]);

  useEffect(() => {
    fetch('/admin/order')
      .then(data => data.json())
      .then(orders => dispatch({type: adminOrderAT.GET_ORDERS, payload: orders.orders}));
  },[dispatch]);

  

  // const categoryId = useRef(null);  
  
  const [amount, setAmount] = useState(1);
  // const [category, setCategory] = useState('Category1');
  const arrAmount = [];
  for (let i = 0; i < 100; i += 1) {
    arrAmount.push(i + 1);
  }
  
  const deleteHandler = (event) => {
    event.preventDefault();
    const obj = {};
    obj.index = index;
    obj.orderId = order.id;
    obj.dishId = dish.id;
    obj.dishCreatedAt = dish.createdAt;
    obj.dishUpdateAt = dish.updatedAt;
      fetch('/admin/dish', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj),
      })
      
      dispatch({ type: adminOrderAT.DELETE_DISH, payload: obj });
  }

  // const handlerCategory = (event) => {
  //   const select = event.target;
  //   setCategory(select.value);
  // }
  
  // const handlerDish = (event) => {
  //   const select = event.target;
  //   setDish(select.value);
  // }
  const handlerAmount = (event) => {
    const select = event.target;
    setAmount(select.value);
  }
  return (
    <div className={styles.dishesList}>
      <p className={styles.margin}>{dish.category}</p>
      <p className={styles.margin}>{dish.name}</p>
      <p className={styles.margin}>{dish.price} рублей</p>

      <div className={styles.select}>
        <label forHtml='amount'>Количество</label>
        <select className={styles.marginSelect} onChange={handlerAmount} name='amount' min={1} max={100} >
          {arrAmount.map(item => <option value={item}>{item}</option>)}
        </select>
      </div>
     
      <p className={styles.margin}>Итого {amount * dish.price} рублей</p>
      <button className={styles.button} onClick={deleteHandler}>&times;</button>
    </div>
  );
}

export default EditDish;
