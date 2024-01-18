// modified script 
// originally made by amplitudesxd

let mobile = 'ontouchstart' in document.documentElement;
let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.com/users/443026532517281795';
      break;
    case 'github':
      url = 'https://github.com/bialasek';
      break;
    case 'twitter':
      url = '#';
      break;
  }

  window.open(url);
}

function startIntroTyping() {
  const instance = new Typewriter('#intro-text', {
    delay: 50,
  });

  instance.typeString('welcome.')
    .pauseFor(1200)
    .deleteAll(20)
    .pauseFor(600)
    .typeString(`${mobile ? 'tap' : 'press any key'} to enter.`)
    .pauseFor(350)
    .typeString('<br/>')
    .typeString('enjoy!')
    .start();
    
  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}

function startMainTyping() {
  const instance = new Typewriter('#subtext', {
    delay: 50,
    loop: true,
  });

  instance.typeString('web developer')
    .pauseFor(1000)
    .deleteAll(20)
    .pauseFor(500)
    .typeString('mtb rider')
    .pauseFor(1000)
    .deleteAll(20)
    .pauseFor(500)
    .typeString('sport enthusiast')
    .pauseFor(1000)
    .deleteAll(20)
    .pauseFor(500)
    .start();
}

function switchScreen() {
  const textToWrite = " bialas.fun";
  const additionalText = "~#";
  const titleElement = document.getElementById("dynamic-title");
  let currentIndex = 0;
  let isReversing = false;

  const musicPath = 'resources/background.mp3';
  const backgroundMusic = new Audio(musicPath);
  backgroundMusic.loop = true;
  backgroundMusic.play();

  function updateTitle() {
    const currentText = textToWrite.slice(0, currentIndex + 1);
    titleElement.innerText = additionalText + currentText;

    isReversing ? currentIndex-- : currentIndex++;

    if (currentIndex === textToWrite.length || currentIndex === 0) {
      isReversing = !isReversing;
    }
  }

  setInterval(updateTitle, 1000);

  $('.intro').fadeOut(1000, function () {
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
  document.onselectstart = () => false;
});