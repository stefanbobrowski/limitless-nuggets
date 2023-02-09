import { useState, useEffect, useContext } from 'react';
import { Context } from '../../store';
import './Cart.scss';

export const Cart = () => {
  const [state, dispatch] = useContext(Context);

  const { cart, subtotal } = state;

  // const [subtotal, setSubtotal] = useState(0);

  const handleRemoveFromCart = (index) => {
    // const newCart = [...cart];
    // newCart.splice(index, 1);
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const handleOpenCheckout = () => {
    dispatch({ type: 'OPEN_CHECKOUT' });
  };

  // useEffect(() => {
  //   console.log('The cart: ', cart);
  //   setSubtotal(0);

  //   if (cart) {
  //     let zzz = 0;
  //     cart.forEach((item) => {
  //       console.log('tee heee', item);
  //       zzz = zzz + item.price;
  //     });
  //     setSubtotal(zzz);
  //   }
  // }, [cart]);

  return (
    <div className='cart'>
      <h1>Cart</h1>

      <div className='nugget-container'>
        {cart &&
          cart.map((item, i) => (
            <div key={i} className='nugget'>
              <div className='nugget-image'>
                <img src={item.image} alt={item.name} />
              </div>
              <button
                className='remove-button'
                onClick={() => handleRemoveFromCart(i)}
              >
                ❌
              </button>
              <span>
                {item.strain} ({item.amount}) -{' '}
                <span className='price-red'>${item.price}</span>
              </span>
            </div>
          ))}
      </div>

      <p className='subtotal'>
        Subtotal ({cart.length} items): <b className='price-red'>${subtotal}</b>
      </p>

      <button className='checkout-button' onClick={handleOpenCheckout}>
        CHECKOUT
      </button>
    </div>
  );
};
