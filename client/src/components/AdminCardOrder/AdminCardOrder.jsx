import { useState } from 'react';
import { useDispatch} from 'react-redux';
import adminOrderAT from '../../redux/actionTypes/adminOrderAT';
import styles from './AdminCardOrder.module.css';
import AdminEditCardOrder from '../AdminEditCardOrder/AdminEditCardOrder';
import './AdminCardOrder.css';
import Dish from '../Dish/Dish';
import EditDish from '../EditDish/EditDish';

const pStatus = { 
  awaitOrder: 'Задачи, ожидающие подтверждения',
  submitOrder: 'Задачи, отправленные на кухню',
  admitOrder: 'Исполняемые на кухне задачи',
  successOrder: 'Исполненные кухней задачи, ожидающие подтверждения',
  sendOrder: 'Задачи на доставке' };

function AdminCardOrder({ order, isOpen, isClose, isEditOpen, isEditClose }) {
  const [editModal, setEditModal] = useState(false);

  const dispatch = useDispatch();
  // const state = useSelector(state => state.adminOrders);

  const funcFetch = () => {
    fetch('/admin/changeStatus', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(data => data.json())
      .then(order => dispatch({type: adminOrderAT.CHANGE_STATUS_ORDER, payload: order})); 
    isClose();
  }

  const changeStatusHandler = () => {
    if (order.currentStatus === 'awaitOrder') {
      order.currentStatus = 'submitOrder';
      funcFetch();
    } else if (order.currentStatus === 'sendOrder') {
      order.currentStatus = 'endOrder';
      funcFetch();
    }  else {
      isClose();
    }

  }

  return (
    <>   
      <div className={`modal_wrapper ${isOpen ? 'open' : 'close'} ${order.currentStatus}`}>
        <div className='modal_body'>
          <section className={styles.card}>
          <h2>Карта заказа из комнаты {order.room}</h2>
          <p>{pStatus[order.currentStatus]}</p>
          <div>
            <p>Гость {order.userName}</p>        
            <p>номер телефона: {order.phone} </p>
          </div>
          <div className={styles.card__description}>
            <h3>
              Заказ № {order.id}
            </h3>

            {(order && !editModal && order.dishes[0].id) && order.dishes.map((dish) => <Dish key={dish.id} dish={dish} />)}
            {(order && editModal && order.dishes[0].id) && order.dishes.map((dish, index) => <EditDish key={dish.id} index={index} order={order} dish={dish} />)}
            <p>Итого: {order.totalSum} рублей</p>
          </div>

          <div className={styles.card__fieldButton}>       
            <button className={styles.card__button} style={{backgroundColor: 'red'}} onClick={() => {setEditModal(false); isClose()}}>Отменить</button>
            {
              order.currentStatus === 'awaitOrder' &&
            <button className={styles.card__button} style={{backgroundColor: 'yellow'}} onClick={() => {setEditModal(true)}} >Редактировать</button> 
            }
            {            
              (order.currentStatus === 'awaitOrder' || order.currentStatus === 'sendOrder') &&                
             <button className={styles.card__button} style={{backgroundColor: 'green'}} onClick={changeStatusHandler}>Отправить в работу</button>           
            }
            
          </div>
          
        </section>
        </div>
      </div>

      <AdminEditCardOrder order = {order} isEditOpen={isEditOpen} isEditClose={isEditClose} />
    </>
  );
}

export default AdminCardOrder;
