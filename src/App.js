import 'jquery/dist/jquery.min.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './Components/Header';
import Meals from './Components/Meals';
import { CartContextProvider } from './Store/CartContext.jsx'
import { UserProgressContextProvider } from './Store/UserProgressContext.jsx';
import Cart from './Components/Cart.jsx';


function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
       <Header/>
       <Meals/>
       <Cart/>
      </CartContextProvider>
    </UserProgressContextProvider>
   
  );
}

export default App;
