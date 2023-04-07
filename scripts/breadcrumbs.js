const newBreadcrumbs = document.querySelector('.custom-header__breadcrumbs');
const ref = document.querySelectorAll('.breadcrumbs a');
ref.forEach((item) =>
  newBreadcrumbs.insertAdjacentHTML(
    'beforeend',
    `
  <li><a href="${item.href.replace(`https://${window.location.hostname}`, '')}">${
      item.innerText
    }</a></li>
  `
  )
);
