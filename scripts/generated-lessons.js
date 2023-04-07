document.addEventListener('DOMContentLoaded', () => {
  const lessonsGC = document.querySelectorAll('.lesson-list li:not(.divider)');
  const lessonsCustom = document.querySelector('.custom-lessons');
  let dataLessons = Array.from(lessonsGC).map((item, index) => {
    return {
      title: item.querySelector('.link.title').innerText.replace('просмотрено', ''),
      number: index + 1,
      href: item.querySelector('a').href.replace(`https://${window.location.hostname}`, ''),
      state: item.classList[0],
      descr: item.querySelector('.description') ? item.querySelector('.description').innerText : '',
      date: item.querySelector('.has-start-at')
        ? item.querySelector('.has-start-at').innerText.replace('Недоступен до', '').replace(/[\t\n]/g, '').trim()
        : '',
    };
  });
  for (let lesson of dataLessons) {
    switch (lesson.state) {
      case 'user-state-accomplished':
        lessonStateText = 'Принят';
        break;
      case 'user-state-reached':
        lessonStateText = 'Доступен';
        break;
      case 'user-state-need_accomplish':
        lessonStateText = 'Стоп-урок';
        break;
      case 'user-state-answered':
        lessonStateText = 'На проверке';
        break;
      case 'user-state-has_mission':
        lessonStateText = 'Есть задание';
        break;
      case 'user-state-not_reached':
        lessonStateText = 'Закрыт';
        break;
    }
    let newLesson = document.createElement('a');
    newLesson.href = lesson.href;
    newLesson.className = `custom-lessons__item custom-lesson ${lesson.state}`;
    newLesson.innerHTML = `
    <div class="custom-lesson__state">${lessonStateText}</div>
    <div class="custom-lesson__title">${lesson.title}</div>
    <div class="custom-lesson__description">
      ${lesson.descr}
    </div>
    <div class="custom-lesson__button">
      <span>Перейти</span>
    </div>
      `;

console.log(lesson.date)

    if (lesson.state === 'user-state-not_reached' && lesson.date.length) {
      newLesson.classList.add('custom-has-date');
      newLesson.querySelector('.custom-lesson__button span').innerText = lesson.date;
    }
    lessonsCustom.append(newLesson);
  }
});
