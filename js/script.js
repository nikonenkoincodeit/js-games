window.onload = () => {
  const cardRef = document.querySelector(".card");
  const distanceRef = document.querySelector("#distance");
  const width = cardRef.clientWidth;
  const height = cardRef.clientHeight;
  let click = 0;

  function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
  }

  const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
  };

  cardRef.addEventListener("click", findTreasure);

  function findTreasure(event) {
    click += 1;
    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);
    distanceRef.textContent = distanceHint;
    if (distance < 8) {
      alert("Клад найден! Было сделанно кликов " + click);
    }
  }

  function getDistance(event, target) {
    const x = event.offsetX - target.x;
    const y = event.offsetY - target.y;
    return Math.sqrt(x * x + y * y);
  }

  function getDistanceHint(distance) {
    if (distance < 10) {
      return "Обожжешься";
    } else if (distance < 20) {
      return "Очень горячо";
    } else if (distance < 40) {
      return "Горячо";
    } else if (distance < 80) {
      return " Тепло";
    } else if (distance < 160) {
      return " Холодно";
    } else if (distance < 320) {
      return "Очень холодно";
    } else {
      return "Замезнешь";
    }
  }
};
