// Get Elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const container = document.querySelector('.container');
const preloader = document.getElementById('preloader');

function countdown(){
    // Create data
    const currentDate = new Date();
    const deadline = new Date('September 20, 2023 00:00:00');
    const difference = deadline - currentDate;
    const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
    const secondsLeft = Math.floor(difference / 1000) % 60;

    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
countdown();
setTimeout( () => {
    container.style.display = 'flex';
    preloader.style.display = 'none';
}, 2000);

setInterval(countdown, 1000);