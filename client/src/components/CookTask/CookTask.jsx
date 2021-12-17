import { useDispatch } from 'react-redux';
import adminOrderAT from '../../redux/actionTypes/adminOrderAT';
import CookDish from "../CookDish/CookDish";
import styles from './CookTask.module.css';

function CookTask({ order }) {
  const dispatch = useDispatch();
  // const state = useSelector(state => state.adminOrders);

  const funcFetch = () => {
    fetch('/cook/changeStatus', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(data => data.json())
      .then(order => dispatch({type: adminOrderAT.CHANGE_STATUS_ORDER, payload: order})); 
  }

  const changeStatusHandler = () => {
    if (order.currentStatus === 'submitOrder') {
      order.currentStatus = 'admitOrder';
      funcFetch();
    } else if (order.currentStatus === 'admitOrder') {
      order.currentStatus = 'successOrder';
      funcFetch();
    } else if (order.currentStatus === 'successOrder') {
      order.currentStatus = 'sendOrder';
      funcFetch();
    }   

  }
  return (
    <div onDoubleClick={changeStatusHandler} className={styles.cookTask}>
      <h3>Order {order.id}</h3>
      {order.dishes.length && order.dishes
        .map(dish => <CookDish key={dish.id} dish={dish} />)}
      {console.log(order.dishes)}
    </div>
  );
}

export default CookTask;
