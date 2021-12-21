import { useDispatch} from 'react-redux';

import adminOrderAT from '../../redux/actionTypes/adminOrderAT';
import styles from './AdminEditCardOrder.module.css';
import './AdminEditCardOrder.css';
// import EditDish from '../EditDish/EditDish';

const pStatus = { 
  awaitOrder: 'Задачи, ожидающие подтверждения',
  submitOrder: 'Задачи, отправленные на кухню',
  admitOrder: 'Исполняемые на кухне задачи',
  successOrder: 'Исполненные кухней задачи, ожидающие подтверждения',
  sendOrder: 'Задачи на доставке' };

function AdminEditCardOrder({ order, isEditOpen, isEditClose }) {

  const dispatch = useDispatch();

  
  const funcFetch = () => {
    fetch('/admin/changeOrder', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(data => data.json())
      .then(order => dispatch({type: adminOrderAT.CHANGE_ORDER, payload: order})); 
    isEditClose();
  }

  const changeStatusHandler = () => {
    if (order.currentStatus === 'awaitOrder') {
      order.currentStatus = 'submitOrder';
      funcFetch();
    } else {
      isEditClose();
    }

  }
  return (
    <div className={`modal_wrapper ${isEditOpen ? 'open' : 'close'}`}>
      <div className='modal_body'>
    <section className={styles.card}>
    <h2>Карта заказа из комнаты {order.room}</h2>
    <p>{pStatus[order.currentStatus]}</p>
    <div>
      <p>Гость {order.userName}</p>        
      <p>номер телефона: {order.phone}</p>
    </div>
    <div className={styles.card__description}>
      <h3>
        Заказ № {order.id}
      </h3>
      {/* {order && order.dishes.map((editDish) => <EditDish key={editDish.id} editDish={editDish} />)} */}
      <p>Итого: {order.totalSum} рублей</p>
    </div>
    <div className={styles.card__fieldButton}>       
      <button className={styles.card__button} style={{backgroundColor: 'red'}} onClick={isEditClose}>Отменить</button>
      <button className={styles.card__button} style={{backgroundColor: 'green'}} onClick={changeStatusHandler}>Сохранить</button>
    </div>
    
  </section>
   </div>
   </div>
  );
}

export default AdminEditCardOrder;
