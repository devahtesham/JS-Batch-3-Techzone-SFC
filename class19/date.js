// // Date

// // let today = new Date();
// // let myDay = new Date("2023-08-15");  // yyy-mm-ddd
// // console.log(today)
// // getDate()
// // let ans = today.getDate();
// // let ans = today.getDay();
// // let ans = today.getFullYear();
// // let ans = today.getMilliseconds();
// // let ans = today.getSeconds();
// // let ans = today.getMinutes();
// // let ans = today.getHours();
// // let ans = today.getMonth();


// // console.log(myDay.toDateString());
// // console.log(myDay.toLocaleDateString());
// // console.log(today.toTimeString());
// // console.log(today.toLocaleTimeString());
// // console.log(today.toLocaleString());
// // console.log(today.getTime());

// // getTime
// let independenceDay = new Date("1947-08-14");   // 14 Aug, 1947
// let independenceDayTS = independenceDay.getTime() // Timestamp

// // let today = new Date();
// // let todayTS = today.getTime() // Timestamp

// // let netTimeStamp = todayTS - independenceDayTS ;
// // console.log(netTimeStamp);


// // filteration
// let seconds = Math.floor(netTimeStamp/1000);
// let minutes = Math.floor(seconds/60);
// let hours = Math.floor(minutes/60);
// let days = Math.floor(hours/24);
// let months = Math.floor(days/30);
// let years = Math.floor(months/12);

// console.log(years)


// console.log(todayTS);
// console.log(netTimeStamp);

// const time = now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})
// const date = now.toDateString()

// ============= DIGITAL CLOCK ================
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

const timeBox = document.querySelector(".time");
const dateBox = document.querySelector(".date")

const tick = () => {
    let today = new Date();
    let date = today.toDateString()  // date
    let time = today.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })

    timeBox.innerText = time;
    dateBox.innerText = date;
}
let timer;
startBtn.addEventListener("click",()=>{
    timer = setInterval(tick,1000);
    console.log(timer);
})

stopBtn.addEventListener("click",()=>{
    clearInterval(timer)
})










