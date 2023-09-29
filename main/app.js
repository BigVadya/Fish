function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInt = getRandomInt(200, 230);

[...document.querySelectorAll('.number')].forEach(i => {
  i.textContent = getRandomInt;
});