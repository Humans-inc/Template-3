document.addEventListener('load', () => {
  let userBalance = document.querySelector('#balance_virtual').innerText;
  if (!userBalance) {
    document.querySelector('.user-data__bonus').style.display = 'none';
  } else {
    document.querySelector('.user-data__bonus').innerText = `${userBalance} ₽`;
  }
});