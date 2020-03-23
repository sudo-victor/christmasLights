const lists = document.querySelector("ul");
const powerOff = document.getElementById("power-off");
const plusVelocity = document.getElementById("plus-velocity");
const minusVelocity = document.getElementById("minus-velocity");
const root = document.documentElement;

let velocity = 1;

powerOff.onclick = e => {
    lists.classList.toggle("on");
    root.style.setProperty("--time-first", "1000ms");
    root.style.setProperty("--time-second", "2000ms");
};

plusVelocity.onclick = e => {
    if (velocity === 1) {
        root.style.setProperty("--time-first", "100ms");
        root.style.setProperty("--time-second", "200ms");
        velocity = 2;
    } else if (velocity === 2) {
        root.style.setProperty("--time-first", "10ms");
        root.style.setProperty("--time-second", "20ms");
        velocity = 3;
    }
};

minusVelocity.onclick = e => {
    if (velocity === 3) {
        root.style.setProperty("--time-first", "100ms");
        root.style.setProperty("--time-second", "200ms");
        velocity = 2;
    } else if (velocity === 2) {
        root.style.setProperty("--time-first", "1000ms");
        root.style.setProperty("--time-second", "2000ms");
        velocity = 1;
    }
};
