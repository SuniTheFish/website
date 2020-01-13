import $ from 'jquery';

export default function load() {
  $.get('nav.html', (data) => {
    // console.log('fish');
    // add navbar to DOM
    $('#nav-placeholder').replaceWith(data);
    // add page highlight and sr info
    $('.nav-link')
      .filter((_, element) => element.href === window.location.href)
      .append('<span class="sr-only">(current)</span>')
      .parent()
      .addClass('active');
  });
}
