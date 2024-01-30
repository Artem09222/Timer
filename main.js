// setTimeout(() => {
//     alert('Привіт!')
// }, 3000)

// let index = 1;
// let interval = setInterval(() => {
//     console.log(index);
//     index++;
//     if (index > 5) {
//         clearInterval(interval)
//     }
// }, 1000)

// let nameFunc = (name) => {
//     console.log(`Hello, ${name}`);
// }

// setTimeout(() => {
//     nameFunc('Jonh')
// }, 1000)

// function data(){
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// setInterval(data, 1000)

// function dateIntrval(){
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     console.log(`${hours}:${minutes}:${seconds}`);
//     console.log('Це несподівано!')
// }

// let date = setInterval(dateIntrval, 3000)
// console.log('Timer is successful');

// setTimeout(() => {
//    clearInterval(date)
//    console.log('Timer is unsuccessful');
// }, 3000)

// function newAppdateTimer() {
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// let setTimer = setInterval(newAppdateTimer, 2000)

// setTimeout(() => {
//     clearInterval(setTimer)
//     console.log('Інтервал зупинено! Пройшло 10 секунд');
// }, 10000)


// Домашні вправи/ex 1

// let intervals = setInterval(() => {
//     console.log('Виводити повідомлення 5 разів');
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervals)
// }, 5000)

// Домашні вправи/ex 2
let btn = document.querySelector('.btn')

const btnsInterval = setInterval(() => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215)
    btn.style.backgroundColor = randomColor;
}, 1000)

// Домашні вправи/ex 3
let btnA = document.querySelector('.btnA')

let clicks = 0;

btnA.addEventListener('click', () => {
    clicks++
    let clicksCount = setInterval(() => {
    console.log('Count of clicks:', clicks);
    }, 1000)

    setTimeout(() => {
        clearInterval(clicksCount)
        console.log('Clicks ended:', clicks);
    }, 10000)
})

// Домашні вправи/ex 4

function seconds() {
    let second = prompt("Please enter your seconds");
    const getSecond = parseInt(second);

    if (isNaN(getSecond)) {
        console.log('Invalid input');
        return;
    }

    console.log('Seconds' + ':' + getSecond);

    const timeoutId = setTimeout(() => {
        console.log('Yeee, world! :)');
        clearTimeout(timeoutId);
    }, 1000); 
}

seconds();