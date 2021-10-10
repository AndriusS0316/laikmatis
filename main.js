



const restart = document.querySelector('.restart');
const min10 = document.querySelector('.min10');
const min15 = document.querySelector('.min15');
const min20 = document.querySelector('.min20');
const min30 = document.querySelector('.min30');
const min45 = document.querySelector('.min45');



{ document.querySelector(".laikrodis").style.display = "block"; }
{ document.querySelector(".timesUp").style.display = "none"; }



// The main JavaScript to enable the countdown timer.

//circle start
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
    var offset = - length - length * value / (timePercent);
    progressBar.style.strokeDashoffset = offset;
    pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const pauseBtn = document.getElementById('pause');
const setterBtns = document.querySelectorAll('button[data-setter]');

let intervalTimer;
let timeLeft;
let wholeTime = 1 * 60; // manage this to set the whole time 
let isPaused = false;
let isStarted = false;






update(wholeTime, wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds) {
    if ((wholeTime + seconds) > 0) {
        wholeTime += seconds;
        update(wholeTime, wholeTime);
    }
}

for (var i = 0; i < setterBtns.length; i++) {
    setterBtns[i].addEventListener("click", function (event) {
        var param = this.dataset.setter;
        switch (param) {
            case 'minutes-plus':
                changeWholeTime(1 * 60);
                break;
            case 'minutes-minus':
                changeWholeTime(-1 * 60);
                break;
            case 'seconds-plus':
                changeWholeTime(1);
                break;
            case 'seconds-minus':
                changeWholeTime(-1);
                break;
        }
        displayTimeLeft(wholeTime);
    });
}

function timer(seconds) { //counts time, takes seconds
    let remainTime = Date.now() + (seconds * 1000);
    displayTimeLeft(seconds);

    intervalTimer = setInterval(function () {
        timeLeft = Math.round((remainTime - Date.now()) / 1000);
        if (timeLeft < 0) {

            { document.querySelector(".laikrodis").style.display = "none"; }
            { document.querySelector(".timesUp").style.display = "block"; }
            // clearInterval(intervalTimer);
            // isStarted = false;
            // setterBtns.forEach(function (btn) {
            //     btn.disabled = false;
            //     btn.style.opacity = 1;
            // });
            // displayTimeLeft(wholeTime);
            // pauseBtn.classList.remove('pause');
            // pauseBtn.classList.add('play');
            // return;
        }
        displayTimeLeft(timeLeft);
    }, 1000);
}
function pauseTimer(event) {
    if (isStarted === false) {
        timer(wholeTime);
        isStarted = true;
        this.classList.remove('play');
        this.classList.add('pause');

        setterBtns.forEach(function (btn) {
            btn.disabled = true;
            btn.style.opacity = 0.5;
        });

    } else if (isPaused) {
        this.classList.remove('play');
        this.classList.add('pause');
        timer(timeLeft);
        isPaused = isPaused ? false : true
    } else {
        this.classList.remove('pause');
        this.classList.add('play');
        clearInterval(intervalTimer);
        isPaused = isPaused ? false : true;
    }
}

function displayTimeLeft(timeLeft) { //displays time on the input
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    displayOutput.textContent = displayString;
    update(timeLeft, wholeTime);
}

pauseBtn.addEventListener('click', pauseTimer);

//mygtukai
function min10Click () {
    console.log("10");
    wholeTime = 10 * 60;
};

function min15Click () {
    console.log("15");
    wholeTime = 15 * 60;
};

function min20Click () {
    console.log("20");
    wholeTime = 20 * 60;
};

function min30Click () {
    console.log("30");
    wholeTime = 30 * 60;
};

function min45Click () {
    console.log("45");
    wholeTime = 45 * 60;
};
//mygtukai

min10.addEventListener('click', min10Click);
min15.addEventListener('click', min15Click);
min20.addEventListener('click', min20Click);
min30.addEventListener('click', min30Click);
min45.addEventListener('click', min45Click);