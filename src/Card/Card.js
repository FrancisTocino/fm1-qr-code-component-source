
import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    return (
      <div className='main-box'>
        <div className='box1'></div>
        <div className='box2'>
            <p>Improbe your front-end skill by 
            building projects</p>
            <p>Scan the QR code to visit FrontEnd
                Mentor and taake your coding
                skill to the next level</p>
        </div>
      </div>
    )
  }
}


