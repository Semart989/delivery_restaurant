// import ViewContainer from '../ViewContainer/ViewContainer';
import AdminCardOrder from '../AdminCardOrder/AdminCardOrder';
import AdminEditCardOrder from '../AdminEditCardOrder/AdminEditCardOrder';
import './App.css';

function App() {
  return (
    <div className="App">
      DELIVERY RESTAURANT
      {/* <ViewContainer/> */}
      <AdminCardOrder />
      <AdminEditCardOrder />
    </div>
  );
}

export default App;
