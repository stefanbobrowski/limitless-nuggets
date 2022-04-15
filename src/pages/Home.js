import { useContext } from 'react';
import { Context } from '../store';
import { NugBoard } from '../components/NugBoard/NugBoard';
import { Cart } from '../components/Cart/Cart';
import { Checkout } from '../components/Checkout/Checkout';

export const Home = () => {
  const [state, dispatch] = useContext(Context);

  const { openCheckout } = state;

  return (
    <div className='page home-page'>
      <div className='container'>
        {openCheckout ? (
          <Checkout />
        ) : (
          <>
            <NugBoard />
            <Cart />
          </>
        )}
      </div>
    </div>
  );
};
