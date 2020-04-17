const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const cirlce = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let currentOffset =0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Started');
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset',currentOffset);
    currentOffset = currentOffset-50;
  },
  onComplete() {
    console.log('Timer Completed');
  },
});
timer.start();
