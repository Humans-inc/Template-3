document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.custom-content__content_courses')
    .append(document.querySelector('#stream-table'));

  document.querySelectorAll('#stream-table .stream-table tr td a').forEach((item, index) => {
    item.insertAdjacentHTML(
      'afterbegin',
      `<span class="custom-course__number">
      ${index + 1}
    </span>`
    );
    item.insertAdjacentHTML(
      'beforeend',
      `<span class="custom-course__button">
      Купить
    </span>`
    );
    item.querySelector('div').classList.add('custom-course__description');
    item.querySelector('.stream-title').append(item.querySelector('.custom-course__description'));
  });
});
/* к списку уроков добавить id="stream-table" */
