import React, { Component } from 'react';
import BetterImage from '../BetterImage/BetterImage.js';
import img1 from './images/avocado.png';


class App extends Component {
  
  render() { 
    return (
      <div>

      {/* sample original image rendering here */}
        <h1> Original Image </h1>
          <img src={img1} />
          {console.log("app.js ", img1)}

      {/* betterimage rendering here */}
        <h1> BetterImage</h1> 
        <BetterImage
          source={'./images/avodaco.png'}
          quality={'80'}
          resize={'600x800'}
        />
        
      </div>
    );
  }
}

export default App;
