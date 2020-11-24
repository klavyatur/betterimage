import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';
import bigPNG from "./images/bigPNG.png";
import placeholder from "./images/placeholder.webp";


class App extends Component {

  render() { 
    return (
      <div>
        <BetterImage
          source={bigPNG}
          resize={'600x900'}
          format={'webp'}
          quality={80}
        />
      </div>
    );
  }
}

export default App;
