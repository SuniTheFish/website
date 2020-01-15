import 'core-js/stable';
import loadNavBar from './nav/nav';

import(/* webpackChunkName: "sphere" */ 'assembling-orange-sphere').then(({ default: aos }) => {
  const canvas = document.querySelector('#animation');
  aos.createAnimation(canvas);
});

/* eslint-disable no-unused-expressions */
import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "bootstrap-style" */'./scss/index.scss');
/* eslint-enable */

loadNavBar();

document.querySelector('#location').textContent = window.location.host;
