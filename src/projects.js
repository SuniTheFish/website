import 'core-js/stable';
import loadNavBar from './nav/nav';

/* eslint-disable no-unused-expressions */
import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "bootstrap-style" */'./scss/index.scss');
/* eslint-enable */

loadNavBar();

const request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/SuniTheFish/repos');
request.onload = function loadGits() {
  if (this.status >= 200 && this.status < 400) {
    /** @type {{}[]}} */
    const repos = JSON.parse(this.response);
    const projects = document.querySelector('#projects');
    repos.forEach((repo) => {
      const card = document.createRange().createContextualFragment(`
        <div class="card">
          <a href="${repo.html_url}" target="_blank">
            <h4 class="card-title my-0">${repo.name}</h4>
          </a>
          <p class="card-text">${repo.description || '(no description)'}</p>
        </div>
      `);
      projects.appendChild(card);
    });
  }
};
request.send();

document.querySelector('#search').addEventListener('keyup', (eve) => {
  /** @type {string} */
  const search = eve.target.value.toLowerCase();
  document.querySelectorAll('#projects .card-title').forEach((ele) => {
    const card = ele.parentElement.parentElement;
    card.style.display = ele.textContent.toLowerCase().indexOf(search) > -1 ? '' : 'none';
  });
});
