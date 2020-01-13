import 'core-js/stable';
import loadNavBar from './nav/nav';

/* eslint-disable no-unused-expressions */
import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "bootstrap-style" */'./scss/index.scss');
/* eslint-enable */

loadNavBar();

document.querySelector('#location').textContent = window.location.host;
