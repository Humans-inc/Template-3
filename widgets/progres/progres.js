function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}
const textForms = ['задание', 'задания', 'заданий'];
document.addEventListener('DOMContentLoaded', () => {
  let userPoint = 0;
  let allPoint = 0;
  let scale = 0;
  const scaleName = 'Достижения';
  let scales = document.querySelectorAll('#user-progress tbody tr');
  scales.forEach((item) => {
    if (item.querySelector('a').innerText.includes(scaleName)) {
      userPoint = +item.querySelector('.badge').innerText.split(' ')[0];
      let scaleNameArr = item.querySelector('a').innerText.split('/');
      allPoint = +scaleNameArr[scaleNameArr.length - 1];
      scale = Math.round((userPoint / allPoint) * 100) > 100 ? 100 : Math.round((userPoint / allPoint);
    }
  });

  document.querySelector('.custom-header .custom-progress__percent').innerText = `${scale}%`;
  document.querySelector('.custom-header .custom-progress__scale').style.width = `${scale}%`;

  if (document.querySelector('.custom-header__task')) {
    document.querySelector('.custom-header__task').innerHTML = `
      ${userPoint} из ${allPoint}
      <div class="custom-header__units">
      ${declOfNum(userPoint, textForms)}
      </div>
    `;
  }

});
