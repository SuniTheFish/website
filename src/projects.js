/* eslint-disable space-before-function-paren */
import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
import(/* webpackChunkName: "bootstrap-style" */'./scss/index.scss');

import loadNavBar from './nav/nav';

loadNavBar();

const request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/SuniTheFish/repos', true);
request.onload = function loadRepos() {
  if (this.status >= 200 && this.status < 400) {
    const repos = JSON.parse(this.response);
    const projects = document.querySelector('#git-projects');
    repos.forEach((repo) => {
      const card = document.createElement('div');
      card.className = 'card';
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.target = '_blank';
      const cardTitle = document.createElement('h4');
      cardTitle.className = 'card-title my-0';
      cardTitle.textContent = repo.name;
      link.appendChild(cardTitle);
      card.appendChild(link);
      const cardContent = document.createElement('p');
      cardContent.className = 'card-text';
      cardContent.textContent = repo.description || '(no description)';
      card.appendChild(cardContent);
      projects.appendChild(card);
    });
  }
};

request.send();
