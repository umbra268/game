import React from 'react';
import './MainMenu.css'

const MainMenu = () => (
  <div id="mainMenu">
    <button>New Game</button>
    <button disabled>Load Game</button>
    <button disabled>Options</button>
    <button disabled>???</button>
  </div>
);

export default MainMenu;
