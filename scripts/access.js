document.addEventListener('DOMContentLoaded', () => {

  let courseName = 'Онлайн-курс экстремального вождения (демо-данные)';

  fetch('/sales/control/userProduct/my') // запрос на страницу покупок
    .then((resp) => resp.text())
    .then((data) => {
      const html = document.createElement('div'); // создаем html из ответа  со страницы покупок
      html.innerHTML = data;
      const tableTrCollection = html.querySelectorAll('.table-notitle tbody tr'); // находим все действующие покупки с доступом
      let currentIndex; //
      let datesString; //
      let daysLeft;
      tableTrCollection.forEach((el, index) => {
        const trName = el.querySelectorAll('td')[0].textContent.split('.')[1].trim();
          const state = el.querySelector('.label').innerText;
        if (trName.includes(courseName) && state.includes('Активна')) {
          currentIndex = index;
          datesString = el
            .querySelectorAll('td')[1]
            .textContent.replace(/[\\n\\t]/g, '')
            .trim();
          daysLeft = el
            .querySelectorAll('td')[3]
            .textContent.replace(/[\\n\\t]/g, '')
            .trim();
        }
      });

      document.querySelector('.custom-header__access').innerHTML = `
		${daysLeft.replace('через', '')}
        <div class="custom-header__units">
        доступа
        </div>
	  `;
    })
    .catch((e) => console.log(e.message));

});
