const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

// add a click event listener to mode switch
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  // Get current time from Date object and convert to degrees
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 60) * 360;

  //   Rotate the clock hands
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};
// call updateTime to set clock hands every second
setInterval(updateTime, 1000);

updateTime();
