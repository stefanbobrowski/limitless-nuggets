import { useState, useContext } from 'react';
import { Context } from '../../store';
import './Checkout.scss';

export const Checkout = () => {
  const [state, dispatch] = useContext(Context);

  const { cart, subtotal } = state;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerTime, setCustomerTime] = useState('');

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const [tempCart, setTempCart] = useState('');

  const handleGoBack = () => {
    dispatch({ type: 'CLOSE_CHECKOUT' });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const payload = {
      name: customerName,
      phone: customerPhone,
      time: customerTime,
      cart: cart,
      price: subtotal,
    };

    console.log('SUBMITTED ORDER: ', payload);
    setOrderSubmitted(true);
    setTempCart(payload);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className='checkout'>
      {orderSubmitted ? (
        <div>
          <h2>YOU'RE ALL SET!!!!!</h2>
          <p>Thank you for your order!</p>
          <hr />
          <p>{customerName}</p>
          <p>{customerPhone}</p>
          <p>{customerTime}</p>
          <hr />
          {tempCart &&
            tempCart.cart.map((item, i) => (
              <p key={i}>
                {item.strain} ({item.amount}) -{' '}
                <span className='price-red'>${item.price}</span>
              </p>
            ))}
          <hr />
          <p className='price-red'>${tempCart.price}</p>

          <button onClick={handleGoBack}>Go Back Home</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoBack}>GO BACK</button>

          <form onSubmit={handleSubmitOrder}>
            <h1>Checkout ({cart.length} items)</h1>
            <h3>
              1. Name <span className='price-red'>*</span>
            </h3>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            ></input>
            <h3>2. Phone Number</h3>
            <input
              type='tel'
              maxLength={10}
              value={customerPhone}
              onChange={(e) => {
                const validatedValue = e.target.value.replace(/[^0-9]/g, '');
                setCustomerPhone(validatedValue);
              }}
            ></input>

            <h3>3. Choose a time for your appointment (optional)</h3>
            <input
              type='datetime-local'
              id='meeting-time'
              name='meeting-time'
              value={customerTime}
              onChange={(e) => setCustomerTime(e.target.value)}
            ></input>
            <h3>3. Review items</h3>

            {cart.map((item, i) => (
              <div key={i} className='nugget'>
                <div className='nugget-image'>
                  <img src={item.image} alt={item.name} />
                </div>
                <p>
                  {item.strain} ({item.amount}) - ${item.price}
                </p>
              </div>
            ))}

            <p className='order-total'>Order total: ${subtotal}</p>
            <button className='submit-order-button' type='submit'>
              Place your order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
