document.addEventListener('DOMContentLoaded', () => {
  const modulesGC = document.querySelectorAll('.stream-table tr');
  const modulesCustom = document.querySelector('#generated-modules');

  document.querySelector('.custom-content__content_courses').append(modulesCustom);
  let dataModules = Array.from(modulesGC).map((item, index) => {
    let descr;
    if (item.querySelector('b')) {
      descr = item.querySelector('a div').innerText.split('.')[1];
    } else {
      descr = item.querySelector('a div').innerText.replace('нет уроков', '');
    }
    return {
      title: item.querySelector('.stream-title').innerText,
      descr,
      number: index + 1,
      href: item.querySelector('a').href.replace(`https://${window.location.hostname}`, ''),
      id: item.dataset.trainingId,
      lessons: item.querySelector('a div b') ? item.querySelector('a div b').innerText.replace('.', '') : 'нет уроков',
    };
  });

  console.log(dataModules);

  for (let module of dataModules) {
    let newModule = document.createElement('a');
    newModule.href = module.href;
    newModule.className = 'custom-modules__item custom-module';
    newModule.dataset.trainingId = module.id;
    newModule.innerHTML = `
      <div class="custom-module__lessons">${module.lessons}</div>
      <div class="custom-module__title">${module.title}</div>
      <div class="custom-module__description">
      ${module.descr}
      </div>
      <div class="custom-module__button">
        Перейти
        <svg
          width="43"
          height="44"
          viewBox="0 0 43 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.5"
            width="43"
            height="43"
            rx="21.5"
            fill="#353535"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.5892 15.5774C22.2637 15.252 21.7361 15.252 21.4107 15.5774C21.0852 15.9029 21.0852 16.4305 21.4107 16.7559L25.8214 21.1667H16.1666C15.7063 21.1667 15.3333 21.5398 15.3333 22C15.3333 22.4602 15.7063 22.8333 16.1666 22.8333H25.8214L21.4107 27.2441C21.0852 27.5695 21.0852 28.0972 21.4107 28.4226C21.7361 28.748 22.2637 28.748 22.5892 28.4226L28.4225 22.5893C28.7479 22.2638 28.7479 21.7362 28.4225 21.4108L22.5892 15.5774Z"
            fill="white"
          />
        </svg>
      </div>
      `;

    modulesCustom.append(newModule);
  }
});
