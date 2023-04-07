  const modules = document.querySelector('#styled-modules');
  if (modules) {
    document.querySelector('.custom-content__content_courses').append(modules);
    document.querySelector('#styled-modules .stream-table tbody').classList.add('custom-modules');
    document.querySelectorAll('#styled-modules .stream-table td a').forEach((item) => {
      item.className = 'custom-modules__item custom-module';
      let lessons;
      let description;
      if (item.querySelector('b')) {
        lessons = item.querySelector('b').innerText.replace('.', '');
        description = item.querySelector('div').innerText.split('.')[1].trim();
      } else if (!item.querySelector('b')) {
        lessons = 'нет уроков';
        description = item.querySelector('div').innerText.replace('нет уроков', '');
      }
      item.insertAdjacentHTML(
        'afterbegin',
        `<span class="custom-module__lessons">${lessons}</span>`
      );
      item.querySelector('div').innerText = description;
      item.insertAdjacentHTML(
        'beforeend',
        `
        <span class="custom-module__button">
          Перейти
          <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="43" height="43" rx="21.5" fill="#353535"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5892 15.5774C22.2637 15.252 21.7361 15.252 21.4107 15.5774C21.0852 15.9029 21.0852 16.4305 21.4107 16.7559L25.8214 21.1667H16.1666C15.7063 21.1667 15.3333 21.5398 15.3333 22C15.3333 22.4602 15.7063 22.8333 16.1666 22.8333H25.8214L21.4107 27.2441C21.0852 27.5695 21.0852 28.0972 21.4107 28.4226C21.7361 28.748 22.2637 28.748 22.5892 28.4226L28.4225 22.5893C28.7479 22.2638 28.7479 21.7362 28.4225 21.4108L22.5892 15.5774Z" fill="white"></path>
          </svg>
        </span>
      `
      );
    });
  }
