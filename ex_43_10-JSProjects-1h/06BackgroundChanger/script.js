const btn = document.getElementById('btn');
const para = document.getElementById('para');

btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
    // console.log(randomBg());
    const text = document.createElement('span');
    text.classList.add('text');
    text.innerHTML = randomBg();

    //clear paragraph before append new child
    para.innerHTML = '';

    para.appendChild(text);
});

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}