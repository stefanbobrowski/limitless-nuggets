import { useContext, useRef } from 'react';
import { Context } from '../../store';
import { Status } from './components/Status/Status';
import { CommandCenter } from './components/CommandCenter/CommandCenter';
import { PlayerInterface } from './components/PlayerInterface/PlayerInterface';
import { MineralField } from './components/MineralField/MineralField';
import './GameContainer.scss';

export const GameContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);
  const floorRef = useRef();

  const handleFloorClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch({ type: 'SELECT', payload: '' });
    }
  };

  return (
    <div className='game-container' ref={floorRef} onClick={handleFloorClick}>
      <Status />
      <MineralField />
      <CommandCenter />
      <PlayerInterface />
    </div>
  );
};
