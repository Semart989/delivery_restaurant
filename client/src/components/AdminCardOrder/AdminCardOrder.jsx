import styles from './AdminCardOrder.module.css';
import AdminEditCardOrder from '../AdminEditCardOrder/AdminEditCardOrder';
import './AdminCardOrder.css';
import Dish from '../Dish/Dish';

function AdminCardOrder({ order, isOpen, isClose, isEditOpen, isEditClose }) {

  const submitHandler = () => {
    
    isClose();
  }

  return (
    <>   
      <div className={`modal_wrapper ${isOpen ? 'open' : 'close'}`}>
        <div className='modal_body'>
          <section className={styles.card}>
          <h2>Карта заказа из комнаты {order.room}</h2>
          <div>
            <p>Гость {order.userName}</p>        
            <p>номер телефона: {order.phone} </p>
          </div>
          <div className={styles.card__description}>
            <h3>
              Заказ № {order.id}
            </h3>
            {order && order.dishes.map((dish) => <Dish key={dish.id} dish={dish} />)}
            <p>Итого: {order.totalSum} рублей</p>
          </div>

          <div className={styles.card__fieldButton}>       
            <button className={styles.card__button} style={{backgroundColor: 'red'}} onClick={isClose}>Отменить</button>
            <button className={styles.card__button} style={{backgroundColor: 'yellow'}} onClick={isClose}>Редактировать</button>
            <button className={styles.card__button} style={{backgroundColor: 'green'}} onClick={submitHandler}>Отправить в работу</button>
          </div>
          
        </section>
        </div>
      </div>

      <AdminEditCardOrder order = {order} isEditOpen={isEditOpen} isEditClose={isEditClose} />
    </>
  );
}

export default AdminCardOrder;
