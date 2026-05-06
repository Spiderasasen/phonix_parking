// get current date/time
const now = new Date();

const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
const currentTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
});

// slider + label
const slider = document.getElementById("time-slider");
const label = document.getElementById("time-label");

// convert minutes → readable time
function minutesToTime(mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    m = m.toString().padStart(2, "0");
    return `${h}:${m} ${ampm}`;
}

// set slider to current time on load
const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
slider.value = minutesSinceMidnight;

// set initial label
label.textContent = `${currentDay}, ${currentTime}`;

// update label when slider moves
slider.oninput = () => {
    const time = minutesToTime(slider.value);
    label.textContent = `${currentDay}, ${time}`;
};
