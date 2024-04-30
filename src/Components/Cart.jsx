import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../Store/CartContext'
import UserProgressContext from '../Store/UserProgressContext';
import { currencyFormatter } from '../util/formatting';

export default function Cart() {

 const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext);

 const cartTotal = cartCtx.items.reduce(
  (totalPrice,item) => totalPrice + item.quantity * item.price, 0
 );

  return <Modal className="cart" open={userProgressCtx.progress ==='cart'} >

    <h2>your cart</h2>
    <ul>
     {cartCtx.items.map((item => 
     <li key={item.id}>
      {item.name} - {item.quantity}
      </li>
      ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className='modal-actions'></p>
  </Modal>
}
