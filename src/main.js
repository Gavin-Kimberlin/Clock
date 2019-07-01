import Clock from './clock.js';
import $ from 'jquery'
import './styles.css';

let newClock = new Clock(4, 20, 0);

$(document).ready(function(){
  setInterval(function(){
    $('.display').text(newClock.hours +":"+newClock.minutes+":"+newClock.seconds)
  },.00000000000000001)
})
