import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className='app-footer'>
      <span>Copyright &copy; 2022 </span>
      <Link to='https://stefanbobrowski.com/mineral-miner'>Mineral Miner</Link>
      <span>. All Rights Reserved</span>
    </footer>
  );
};
