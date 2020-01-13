import $ from 'jquery';
import loadNavBar from './nav/nav';

/* eslint-disable no-unused-expressions */
import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "bootstrap-style" */'./scss/index.scss');
/* eslint-enable */

loadNavBar();

$.getJSON('https://api.github.com/users/SuniTheFish/repos', (repos) => {

  const projects = $('#git-projects');
  repos.forEach((repo) => {
    projects.append(`
      <div class="card">
        <a href="${repo.html_url}" target="_blank">
          <h4 class="card-title my-0">${repo.name}</h4>
        </a>
        <p class="card-text">${repo.description || '(no description)'}</p>
      </div>
    `);
  });
});
