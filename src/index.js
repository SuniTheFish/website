import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "bootstrap-style" */'./scss/index.scss');

import loadNavBar from './nav/nav';

loadNavBar();

document.querySelector('#location').textContent = window.location.host;
