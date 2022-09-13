// NVABAR

const navIcon = document.querySelector('.nav-icon');
const navClose = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const navBgOverlay = document.querySelector('.nav-bg-overlay');

const openNav = () => {
  navList.classList.add('show');
  navBgOverlay.classList.add('active');
  document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
};

const closeNav = () => {
  navList.classList.remove('show');
  navBgOverlay.classList.remove('active');
  document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
};

navIcon.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
navBgOverlay.addEventListener('click', closeNav)

// AOS LIBRARY

AOS.init({
  offset: 100,
  delay: 100,
  duration: 300,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

// VIDEOS

// VIDEO1

const videoFile1 = document.getElementById('video-file-1');
const videoButton1 = document.getElementById('video-btn-1');
const videoIcon1 = document.getElementById('play-icon-1');

function playPause1() {
  if (videoFile1.paused) {
    videoFile1.play();

    videoIcon1.classList.add('ri-pause-line');
    videoIcon1.classList.remove('ri-play-line');
  }

  else {
    videoFile1.pause();

    videoIcon1.classList.add('ri-play-line');
    videoIcon1.classList.remove('ri-pause-line');
  }
}

videoButton1.addEventListener('click', playPause1);

function finalVideo1() {
  videoIcon1.classList.remove('ri-pause-line');
  videoIcon1.classList.add('ri-play-line');
}

videoFile1.addEventListener('ended', finalVideo1);

// VIDEO2

const videoFile2 = document.getElementById('video-file-2');
const videoButton2 = document.getElementById('video-btn-2');
const videoIcon2 = document.getElementById('play-icon-2');

function playPause2() {
  if (videoFile2.paused) {
    videoFile2.play();

    videoIcon2.classList.add('ri-pause-line');
    videoIcon2.classList.remove('ri-play-line');
  }

  else {
    videoFile2.pause();

    videoIcon2.classList.add('ri-play-line');
    videoIcon2.classList.remove('ri-pause-line');
  }
}

videoButton2.addEventListener('click', playPause2);

function finalVideo2() {
  videoIcon2.classList.remove('ri-pause-line');
  videoIcon2.classList.add('ri-play-line');
}

videoFile2.addEventListener('ended', finalVideo2);