import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import originalImage from './images/bestPhotoEver.png';
import bigPNG from "./images/bigPNG.png";
// import placeholder from "./images/placeholder.webp";


class App extends Component {

  render() { 
    return (
      <div>
        <h1> Original </h1>
        {/* <img src={originalImage} /> */}

        <h1> BetterImage</h1> 
        <BetterImage
          source={originalImage}
          resize={'600x800'}
          format={'webp'}
          quality={80}
          loading={'lazy'}
          rotation={'45'}
        />
      </div>
    );
  }
}

export default App;
