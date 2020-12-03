const fs = require('fs');
const path = require('path')
const webp = require('webp-converter');
const imageController = {}

imageController.convertWebp = (req, res, next) => {
  let { imageName, imgType, quality } = req.body;
  const result = webp.cwebp(path.resolve(__dirname, `../../src/components/App/images/${imageName}.${imgType}`), path.resolve(__dirname, `../../src/components/BetterImage/convertedImage/${imageName}.webp`),`-q 80`);
  
  next()
}



module.exports = imageController