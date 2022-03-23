import { useState, useContext } from 'react';
import { Context } from '../../../../../store';
import worker from '../../../../../assets/worker.jpg';
import minerals from '../../../../../assets/minerals.jpg';
import './Controller.scss';

export const Controller = () => {
  const [state, dispatch] = useContext(Context);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleBuildWorker = () => {
    if (state.minerals > 10) {
      dispatch({ type: 'BUILD_WORKER' });
    } else {
      console.log('Not enough Minerals!');
    }
  };

  return (
    <div className='controller'>
      {showTooltip && (
        <div className='tooltip'>
          <p className='tooltip-title'>Train Worker</p>
          <p className='tooltip-cost'>
            <i className='tooltip-icon'>
              <img src={minerals} alt='Minerals' title='Minerals' />
            </i>
            <span>50</span>
            <i className='tooltip-icon'>
              <img src={worker} alt='Supply' title='Supply' />
            </i>
            <span>1</span>
          </p>
          <p>Basic worker unit. Can gather resources.</p>
        </div>
      )}
      <div className='controller-grid'>
        <div className='grid-item'>
          <button
            className='build-worker-button'
            onClick={handleBuildWorker}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img src={worker} alt='Build worker' title='Build worker' />
          </button>
        </div>
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
        <div className='grid-item' />
      </div>
    </div>
  );
};
