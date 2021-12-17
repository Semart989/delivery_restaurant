import { useState } from 'react';
import AdminCardOrder from '../AdminCardOrder/AdminCardOrder';

import styles from './TaskRoom.module.css';

function TaskRoom({ order }) {

  const [modal, setModal] = useState(false);
 

  return (
    <>
      <div className={styles.taskRoom} onClick={() => setModal(true)}>
        Комната №{ order.room }     
      </div>
      <AdminCardOrder order={order} isOpen={modal} isClose={() => setModal(false)}/>
    </>
    
  );
}

export default TaskRoom;
