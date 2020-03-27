import 'bootstrap';
import './scss/style.scss';
import 'core-js/stable';
import loadNavBar from './nav/nav';

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
          <a href="${repo.homepage || repo.html_url}" target="_blank">
            <h4 class="card-title my-0">${repo.name}</h4>
          </a>
          ${repo.homepage ? `<a href="${repo.html_url}">
            <h6 class="card-title my-0">(repo)</h4>
          </a>` : ''}
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
  const search = eve.target.value;
  const searchRegex = new RegExp(search, 'ig');
  document.querySelectorAll('#projects .card-title').forEach((ele) => {
    const card = ele.parentElement.parentElement;
    const text = ele.textContent;
    const innerEleWrapper = ele; // this is to shut up eslint
    if (search === '') {
      innerEleWrapper.innerHTML = innerEleWrapper.innerHTML.replace(/<mark>(.*?)<\/mark>/ig, '$1');
      card.style.display = '';
    } else if (text.match(searchRegex)) {
      innerEleWrapper.innerHTML = text.replace(searchRegex, (match) => `<mark>${match}</mark>`);
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
