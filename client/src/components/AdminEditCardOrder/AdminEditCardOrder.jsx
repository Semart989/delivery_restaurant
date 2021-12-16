import styles from './AdminEditCardOrder.module.css'
import EditDish from '../EditDish/EditDish';

function AdminEditCardOrder({isEditOpen, isEditClose}) {
  return (
    <div className={`modal_wrapper ${isEditOpen ? 'open' : 'close'}`}>
      <div className='modal_body'>
    <section className={styles.card}>
    <h2>Карта заказа из комнаты 1</h2>
    <div>
      <p>Гость Имя Фамилия,</p>        
      <p>номер телефона: </p>
    </div>
    <div>
      <h3>
        Заказ № 4
      </h3>
      <EditDish />
      <EditDish />
    </div>
    <div className={styles.card__fieldButton}>       
      <button className={styles.card__button} style={{backgroundColor: 'red'}}>Отменить</button>
      <button className={styles.card__button} style={{backgroundColor: 'green'}}>Сохранить</button>
    </div>
    
  </section>
   </div>
   </div>
  );
}

export default AdminEditCardOrder;
