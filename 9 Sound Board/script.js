/** @format */

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button'); // Create Button
  btn.classList.add('btn'); // add class .btn to the button
  btn.innerText = sound; // insert button text

  //add audio
  btn.addEventListener('click', () => {
    stopSongs(); // to prevent playing other audio at the same time

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn); // add the button as class .buttons' child
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
    // currentTime property sets or return the current position(in second)
    // of the audio/video playback.
  });
}
