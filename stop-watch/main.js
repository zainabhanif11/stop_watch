
window.onload = function () {
  let minutes = 0;
  let second = 0;
  let tens = 0;
  let appendminutes = document.querySelector("#minutes");
  let appendtens = document.querySelector("#tens");
  let appendsecond = document.querySelector("#second");
  let startBtn = document.querySelector("#start");
  let stopBtn = document.querySelector("#stop");
  let resetBtn = document.querySelector("#reset");
  let Interval;

  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      tens = "0" + tens;
    } else {
      tens = tens;
    }

    appendtens.innerHTML = tens;

    if (tens >= 100) {
      second++;
      if (second <= 9) {
        second = "0" + second;
      } else {
        second = second;
      }
      appendsecond.innerHTML = second;
      tens = 0
    }

    if (second >= 60) {
        minutes++;
        if (minutes <= 9) {
          minutes = "0" + minutes;
        } else {
          minutes = minutes;
        }
        appendminutes.innerHTML = minutes;
        second = 0
      }

  };

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    document.getElementById("start").disabled = true;
  };

  stopBtn.onclick = () => {
    document.getElementById("start").disabled = false;
    clearInterval(Interval);
  };

  resetBtn.onclick = () => {
    document.getElementById("start").disabled = false;
    clearInterval(Interval);
    tens = 0;
    second = 0;
    minutes = 0;
    appendtens.innerHTML = "00";
    appendsecond.innerHTML = "00";
    appendminutes.innerHTML = "00";
  };
};
