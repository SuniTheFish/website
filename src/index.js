import 'bootstrap';
import './scss/style.scss';
import 'core-js/stable';
import loadNavBar from './nav/nav';

import(/* webpackChunkName: "sphere" */ 'assembling-orange-sphere').then(({ default: aos }) => {
  const canvas = document.querySelector('#animation');
  aos.createAnimation(canvas);
});

loadNavBar();

document.querySelector('#location').textContent = window.location.host;
