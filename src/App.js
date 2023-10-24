import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <h2>ct-dispensary coming soon</h2>
      {/* <Header />
      <Cart />
      <Outlet />
      <Footer /> */}
    </div>
  );
}

export default App;
