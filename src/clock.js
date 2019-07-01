export default class Clock {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    let that = this;
    setInterval (function () {
      that.addSeconds();
    }, 1000);
  };

  addSeconds() {
    if (this.seconds === 60) {
      this.addMinutes();
      this.seconds = 0;
    }else {
      this.seconds += 1;
    }
  };

  addMinutes() {
    if (this.minutes === 60) {
      this.addHours();
      this.minutes = 0;
    }else {
      this.minutes += 1;
    }
  };

  addHours() {
    if (this.hours === 24) {
      this.hours = 0;
    }else {
      this.hours += 1;
    }
  };
}
