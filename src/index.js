import 'bootstrap';
import './scss/index.scss';
import $ from 'jquery';

import loadNavBar from './nav/nav';

loadNavBar();

$('#location').text(window.location.host);
