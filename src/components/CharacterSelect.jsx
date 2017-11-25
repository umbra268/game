import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';
import './CharacterSelect.css';

const characters = ['guy', 'girl'];
export default class CharacterSelect extends PureComponent {
  constructor() {
    super();
    this.state = { selected: null, name: '' };
    this.selectCharacter = this.selectCharacter.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }
  selectCharacter(e) {
    this.setState({selected: e.target.id});
  }
  nameChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    if(this.state.selected === null) {
      return (<div id='character_select'>
        {characters.map(id => <div key={id} id={id} onClick={this.selectCharacter} />)}
      </div>);
    } else {
      return (<div id='character_confirm'>
        <input type='text' placeholder='Name' value={this.state.name} onChange={this.nameChange} />
        <div id={this.state.selected} onClick={this.selectCharacter} />
        <Link to='game' className={`button ${this.state.name.length === 0 ? 'disabled' : ''}`}>Start Game</Link>
      </div>);
    }
  }
}
