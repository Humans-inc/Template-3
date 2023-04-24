document.addEventListener('load', () => {
  let userBalance = document.querySelector('#balance_virtual').innerText.trim();
  if (!userBalance) {
    document.querySelector('.user-data__bonus').style.display = 'none';
  } else {
    document.querySelector('.user-data__bonus').innerText = `${userBalance} ₽`;
  }
  document.querySelector(".user-avatar-wrap > img").src = document.querySelector(".user-avatar-wrap > img").src.replace('50x50', '110x110');
});
