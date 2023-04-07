/* на странице нужно создать пустой контейнер с id="stream-table-generation" */
document.addEventListener('DOMContentLoaded', () => {
  let trainingsGC = document.querySelectorAll('.stream-table tr');
  let trainingsCustomContainer = document.querySelector('#stream-table-generation');

  let trainingsData = [];
  trainingsGC.forEach((item, index) => {
    let obj = {
      title: item.querySelector('.stream-title').innerText,
      descr: item.querySelector('a div').innerText,
      link: item.querySelector('a').href.replace(`https://${window.location.hostname}`, ''),
      noAccess: item.classList.contains('noaccess-mode-show') ? 'noaccess-mode-show' : '',
    };
    trainingsData.push(obj);
  });
  trainingsData.forEach((item, index) => {
    let training = document.createElement('a');
    training.className = `custom-content__course custom-course ${item.noAccess}`;
    training.href = item.link;
    training.innerHTML = `
      <div class="custom-course__number">
      ${index + 1}
      </div>
      <div class="custom-course__data-wrap">
      <div class="custom-course__title">
      ${item.title}
      </div>
      <div class="custom-course__description">
      ${item.descr}
      </div>
      </div>
      <div class="custom-course__button">
      Купить
      </div>
    `;
    trainingsCustomContainer.append(training);
  });

  document
    .querySelector('.custom-content__content_courses')
    .append(document.querySelector('#stream-table-generation'));
});
