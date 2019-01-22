function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes
  };
}

function initializeClock(className, endtime) {
  var timer = document.querySelector(className);
  var daysSpan = timer.querySelector('.discount__timer-disp--days');
  var hoursSpan = timer.querySelector('.discount__timer-disp--hours');
  var minutesSpan = timer.querySelector('.discount__timer-disp--minutes');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) +  325680 * 1000);
initializeClock('.discount__timer', deadline);
initializeClock('.discount__timer--order-section', deadline);
