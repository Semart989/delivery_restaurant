import styles from './AdminCardOrder.module.css';
import Dish from '../Dish/Dish';

function AdminCardOrder(props) {
  return (
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
        <Dish />
        <Dish />
      </div>
      <div className={styles.card__fieldButton}>       
        <button className={styles.card__button} style={{backgroundColor: 'red'}}>Отменить</button>
        <button className={styles.card__button} style={{backgroundColor: 'yellow'}}>Редактировать</button>
        <button className={styles.card__button} style={{backgroundColor: 'green'}}>Отправить в работу</button>
      </div>
      
    </section>
  );
}

export default AdminCardOrder;
