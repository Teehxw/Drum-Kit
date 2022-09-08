// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener('keydown', processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === 'KeyA') {
    // Play A-Clap
    setMusic("A", "clap");

  } else if (e.code === 'KeyS') {
    // Play S-hihat
    setMusic("S", "hihat");

  } else if (e.code === 'KeyD') {
    // Play D-kick
    setMusic("D", "kick");
  } else if (e.code === 'KeyF') {
    // Play F-Openhat
    setMusic("F", "openhat");
  } else if (e.code === 'KeyG') {
    // Play G-Boom
    setMusic("G", "boom");
  } else if (e.code === 'KeyH') {
    // Play H-Ride
    setMusic("H", "ride")
  } else if (e.code === 'KeyJ') {
    // Play J-Snare
    setMusic("J", "snare");
  } else if (e.code === 'KeyK') {
    // Play K-Tom
    setMusic("K", "tom");
  } else if (e.code === 'KeyL') {
    // Play L-Tink
    setMusic("L", "tink");
  }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove('playing');
}

//Functions to play sounds according to what is pressed
function setMusic(key, soundName ){
  let audio = document.getElementById(soundName);
  audio.currentTime = 0;
  audio.play();
  document.getElementById(key).classList.add('playing');

}
