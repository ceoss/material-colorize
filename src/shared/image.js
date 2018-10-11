// @flow ignore

import {from as palleteFrom} from 'node-vibrant';

export const getImagePallete = () => palleteFrom('https://jariz.github.io/vibrant.js/examples/3.jpg')
  .getPalette()
  .then(a=>console.log(a));