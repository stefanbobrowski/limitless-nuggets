import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='app-footer'>
      <span>Copyright &copy; 2022 </span>
      <Link to='/'>Limitless Nuggets</Link>
      <span>. All Rights Reserved</span>
    </footer>
  );
};
