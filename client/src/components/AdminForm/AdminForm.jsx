import styles from './AdminForm.module.css';

function AdminForm(props) {
  return (
    <form name='admin' className={styles.adminForm}>
      <label htmlFor='login'>Login</label>     
      <input name='login' className={styles.adminForm__input} required type='text' tabIndex={1} placeholder='Login'/>
      <label htmlFor='password'>Password</label>     
      <input name='password' className={styles.adminForm__input} required type='password' minLength={8} tabIndex={2} placeholder='Password' />
      <button tabIndex={3} className={styles.adminForm__button}>Reset</button>
      <button tabIndex={4} className={styles.adminForm__button}>Submit</button>      
    </form>
  );
}

export default AdminForm;
