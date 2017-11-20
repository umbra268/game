import React from 'react';
import './MainMenu.css'
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div id="mainMenu">
    <Link to='character_select' className='button'>New Game</Link>
    <span className='button disabled'>Load Game</span>
    <span className='button disabled'>Options</span>
    <span className='button disabled'>???</span>
  </div>
);

export default MainMenu;
