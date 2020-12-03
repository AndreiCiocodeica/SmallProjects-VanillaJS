//DOM Selectors
const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

//data
const data = [
  {
    image: './images/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './images/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './images/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './images/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './images/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './images/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './images/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './images/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './images/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './images/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './images/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './images/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

data.forEach(createBox);
// create speech boxes
function createBox(item) {
  // build ui boxes
  const box = document.createElement('div');

  box.classList.add('box');
  box.innerHTML = `
        <img src="${item.image}" alt="${item.text}"/>
        <p class="info">${item.text}</p>
    `;

  box.addEventListener("click", () => {
    setText(item.text);
    speakText();
  });


  main.appendChild(box);
}

//init speech synth
const message = new SpeechSynthesisUtterance();

// Store the voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  console.log(voices);
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    // add all voices to select option
    voicesSelect.appendChild(option);
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

// set the text
function setText(text) {
  message.text = text;
}

//speak the text
function speakText() {
  speechSynthesis.speak(message);
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

//close button
closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));

voicesSelect.addEventListener('change', (e) => {
  message.voice = voices.find(voice => voice.name === e.target.value);
});

// read text button
readBtn.addEventListener('click', () => {
  setText(textArea.value);
  speakText();
});

// populate with options initialy
getVoices();