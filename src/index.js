import "core-js/stable";
import "regenerator-runtime/runtime";
import './style.css';
//import { mapInit as init } from './js/ymaps'

//window.onload = init();

console.log('Hello, Webpack!');

import GeoReview from './js/geoReview.js';

new GeoReview();