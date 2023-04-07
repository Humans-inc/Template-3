document.addEventListener('DOMContentLoaded', () => {
  const SCALE_LINK = '/teach/control/stream/view/id/711810321';
  const scalesContainer = document.querySelector('.custom-dashboard');
  fetch(SCALE_LINK)
    .then((res) => res.text())
    .then((data) => {
      let html = document.createElement('div');
      html.innerHTML = data;
      let scales = html.querySelectorAll('.xdget-trainingAchievements tbody tr');
      let scalesData = Array.from(scales).map((item) => {
        return {
          name: item.querySelector('a').innerText.split('/')[0].trim(),
          points: item.querySelector('.badge').innerText,
          maxValue: item.querySelector('a').innerText.split('/')[1].trim(),
        };
      });
      console.log(scalesData);
      scalesData.forEach((item, index) => {
        let scale = document.createElement('div');
        scale.classList.add('custom-progress');
        scale.innerHTML = `
          <div class="custom-progress__header">
            <div class="custom-progress__title">${item.name}</div>
            <div class="custom-progress__description">${item.points}</div>
            <div class="custom-progress__percent">60%</div>
          </div>
          <div class="custom-progress__scale-wrap">
            <div class="custom-progress__scale"></div>
          </div>
        `;
        scalesContainer.append(scale);

        let userProgress = Math.round((+item.points.split(' ')[0] / +item.maxValue) * 100);
        scale.querySelector('.custom-progress__percent').innerText = `${userProgress}%`;
        scale.querySelector('.custom-progress__scale').style.width = `${userProgress}%`;
      });
    });
});
