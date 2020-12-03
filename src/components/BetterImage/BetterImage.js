import React from 'react';
import RenderedImage from './RenderedImage.js';
import { Img } from 'react-image';

export default function BetterImage(props) {
  const { source, resize, format, quality, loading, rotation } = props;
  // console.log(source, resize, quality, for mat, rotation)

  ///////////////////////////* Hoisted Variables */////////////////////////////
  let resizedImageWidth;
  let resizedImageHeight;
  let rotationDegree;
  let images = {};

  /////////////////////////* Image Resize Functionality *////////////////////////
  function resizeFunc(string) {
    let foundX = false;
    let num1 = '';
    let num2 = '';

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== 'x' && foundX === false) {
        num1 = num1.concat(string[i]);
      } else if (string[i] === 'x') {
        foundX = true;
      } else if (string[i] !== 'x' && foundX === true) {
        num2 = num2.concat(string[i]);
      }
    }
    resizedImageHeight = Number(num1);
    resizedImageWidth = Number(num2);

    return;
  }

  function rotateImg(degree){
    rotationDegree = degree;
  }
  
  let fileName = source.split('/').pop();
  let imgType = fileName.split('.').pop();
  let imgName = fileName.split('.').shift();
    
  ////////////////* Convert Image Format to WEBP Functionality */////////////////
  function convertedImg(imgName, imgType, quality){
    if (!images[imgName]) {
      images[imgName] = `${imgName}.webp`;

      fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
          },
          body: JSON.stringify({
            imageName: imgName,
            imgType: imgType,
            quality: quality
        })
      })
    }
  }

  ////////////////////* converted Images are declared */////////////////////
  // format
  const convert = convertedImg(imgName, imgType, quality);
  // resize
  const createImg = resizeFunc(resize, source);
  // rotate
  const rotatedImg = rotateImg(rotation);

  ////////////////////* import all images in optimized folder */////////////////////
  function importAll(r) {
    r.keys().map((item, index) => { images[imgName] = r(item); });
    return images;
  }
  images = importAll(require.context('./convertedImage', false, /\.(png|jpe?g|webp|svg)$/));
 

  ////////////////////* Chaining the APIs Together */////////////////////
  // switch statement

  let imgSrc = images[imgName]

  ////////////////////* Render the modifed image component */////////////////////
  return (
    <div>
      {convert}
      {createImg}
      {console.log("render")}
      {/* {rotatedImg} transform: `rotate(${rotationDegree}deg)`,*/}
      <Img src={[imgSrc, '/img/placeholder.webp']} style={{ width: `${resizedImageWidth}px`, height: `${resizedImageHeight}px`}} loading={loading} alt="image failed to load" />
    </div>
  );

}