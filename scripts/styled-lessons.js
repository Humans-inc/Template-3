
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.custom-content__content_courses')
    .append(document.querySelector('#styled-lessons'));

  const lessonsListGC = document.querySelectorAll('.lesson-list li:not(.divider)');
  lessonsListGC.forEach((item) => {
    let lessonDate = item.querySelector('.has-start-at')
      ? item
          .querySelector('.has-start-at')
          .innerText.replace('Недоступен до', '')
          .replace(/[\t\n]/g, '')
          .trim()
      : '';
    item.querySelector('.vmiddle').insertAdjacentHTML(
      'beforeend',
      `
      <div class="custom-lesson__button">
        <span>${item.classList.contains('user-state-not_reached') ? lessonDate : 'Перейти'}</span>
      </div>
      `
    );
    item.querySelector('.has-start-at') ? item.classList.add('custom-has-date') : null;
  });
});
