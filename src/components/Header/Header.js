import { useContext } from 'react';
import { Context } from '../../store';
import { Link } from 'react-router-dom';

import './header.scss';

export const Header = () => {
  const [state, dispatch] = useContext(Context);

  const { showCart } = state;

  const handleToggleCart = () => {
    dispatch({ type: 'TOGGLE_SHOW_CART' });
  };

  return (
    <header className='app-header'>
      <div className='header-nav container'>
        <Link to='/' className='header-logo'>
          <span>🌿 </span>
          <span>CanniCure</span>
        </Link>
        <Link to='/flower'>Flower</Link>
        <Link to='/pre-rolls'>Pre-Rolls</Link>
        <Link to='/concentrates'>Concentrates</Link>
        <Link to='/vaporizers'>Vaporizers</Link>
        <Link to='/edibles'>Edibles</Link>
        <Link to='/accessories'>Accessories</Link>
        <button onClick={handleToggleCart}>🛒</button>
      </div>
    </header>
  );
};
