const sharp = require('sharp');
const fs = require('fs');

const inputFile = './public/Casa Avepane.jpg';
const outputFile = './public/Casa_Avepane_sharp.jpg';

sharp(inputFile)
  .sharpen({ sigma: 1, m1: 2, m2: 2 }) // or adjust as needed for clarity
  .toFile(outputFile)
  .then(() => {
    fs.renameSync(outputFile, inputFile);
    console.log('Image sharpened successfully!');
  })
  .catch(err => {
    console.error('Error sharpening image:', err);
  });
