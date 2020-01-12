export default function load() {
  const request = new XMLHttpRequest();
  request.open('GET', './nav/nav.html', true);

  request.onload = function addNavBar() {
    if (this.status >= 200 && this.status < 400) {
      document.querySelector('#nav-placeholder').replaceWith(document.createRange().createContextualFragment(this.response));
      const currentNavLink = Array.from(document.querySelectorAll('.nav-link')).filter((element) => element.href === window.location.href)[0];
      const sr = document.createElement('span');
      sr.className = 'sr-only';
      sr.textContent = '(current)';
      currentNavLink.appendChild(sr);
      currentNavLink.parentElement.classList.add('active');
    }
  };

  request.send();

  // $.get('/nav/nav.html', (data) => {
  //   // console.log('fish');
  //   // add navbar to DOM
  //   $('#nav-placeholder').replaceWith(data);
  //   // add page highlight and sr info
  //   $('.nav-link')
  //     .filter((_, element) => element.href === window.location.href)
  //     .append('<span class="sr-only">(current)</span>')
  //     .parent()
  //     .addClass('active');
  // });
}
