import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store';
import './Cart.scss';

export const Cart = () => {
  const [state, dispatch] = useContext(Context);

  const { showCart, cart, subtotal } = state;

  // const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  const handleCloseCart = () => {
    dispatch({ type: 'TOGGLE_SHOW_CART' });
  };

  const handleRemoveFromCart = (index) => {
    // const newCart = [...cart];
    // newCart.splice(index, 1);
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const handleOpenCheckout = () => {
    // dispatch({ type: 'OPEN_CHECKOUT' });
    navigate('/checkout');
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

  if (showCart) {
    return (
      <div className='cart'>
        <h1>Cart</h1>
        <button className='close-cart-button' onClick={handleCloseCart}>
          close
        </button>

        <div className='nugget-container'>
          {cart &&
            cart.map((item, i) => (
              <div key={i} className='nugget'>
                <div className='nugget-image'>
                  <img src={item.image} alt={item.name} />
                </div>

                <span>
                  {item.strain} ({item.amount}) -{' '}
                  <span className='price-red'>${item.price}</span>
                </span>
                <button
                  className='remove-button'
                  onClick={() => handleRemoveFromCart(i)}
                >
                  ❌
                </button>
              </div>
            ))}
        </div>

        <p className='subtotal'>
          Subtotal ({cart.length} items):{' '}
          <b className='price-red'>${subtotal}</b>
        </p>

        <button className='checkout-button' onClick={handleOpenCheckout}>
          CHECKOUT
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};
