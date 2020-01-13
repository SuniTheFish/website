export default function load() {
  const request = new XMLHttpRequest();
  request.open('GET', 'nav.html');
  request.onload = function addNavBar() {
    if (this.status >= 200 && this.status < 400) {
      document.querySelector('#nav-placeholder')
        .replaceWith(
          document.createRange().createContextualFragment(this.response),
        );
      const links = [...document.querySelectorAll('.nav-link')]
        .filter((ele) => ele.href === window.location.href);
      const sr = document.createElement('span');
      sr.className = 'sr-only';
      sr.textContent = '(current)';
      links.forEach((link) => {
        link.appendChild(sr);
        link.classList.add('active');
      });
    }
  };
  request.send();
}
