let isPlaying = false;

function togglePlayback() {
  const mediaContainer = document.getElementById('media-container');
  const audioElement = document.getElementById('audio');
  const photoElement = document.getElementById('photo');
  const toggleButton = document.getElementById('toggle-button');

  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
  } else {
    audioElement.play();
    isPlaying = true;
    mediaContainer.style.display = 'block';
    toggleButton.style.display = 'none';
  }
}