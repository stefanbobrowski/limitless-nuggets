import { useState, useEffect, useContext } from 'react';
import { Context } from '../../store';
import './NugBoard.scss';

export const NugBoard = () => {
  const [state, dispatch] = useContext(Context);

  const [nuggets, setNuggets] = useState('');

  const handleAddToCart = (e, nugget) => {
    e.preventDefault();
    const nuggetPriceIndex = e.target.children[0].value;
    const nuggetAmount = Object.keys(nugget.prices)[nuggetPriceIndex];
    const nuggetPrice = Object.values(nugget.prices)[nuggetPriceIndex];
    const payload = {
      image: nugget.imgSrc,
      strain: nugget.strain,
      amount: nuggetAmount,
      price: nuggetPrice,
    };
    dispatch({ type: 'ADD_TO_CART', payload: payload });
  };

  useEffect(() => {
    fetch('data/nuggets.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        setNuggets(data.nuggets);
      });
  }, []);

  return (
    <div className='nug-board'>
      {nuggets &&
        nuggets.map((nugget, i) => (
          <div key={i} className='nugget'>
            <div className='nugget-image'>
              <img src={nugget.imgSrc} alt={nugget.name} />
            </div>
            <p className='nugget-name'>{nugget.strain} </p>
            <form onSubmit={(e) => handleAddToCart(e, nugget)}>
              <select name='sizeSelection'>
                <option value={0}>1/16: ${nugget.prices.sixteenth}</option>
                <option value={1}>1/8: ${nugget.prices.eighth}</option>
                <option value={2}>1/4: ${nugget.prices.quarter}</option>
                <option value={3}>1/2: ${nugget.prices.half}</option>
                <option value={4}>Full: ${nugget.prices.full}</option>
              </select>
              <button type='submit'>Add to Cart</button>
            </form>
          </div>
        ))}
    </div>
  );
};
