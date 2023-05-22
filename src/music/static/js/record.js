// Create a Wavesurfer instance
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'blue',
    progressColor: 'purple',
    height: 150 // Set the desired height here
  });
  
  // Load audio file when selected
  var fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var fileURL = URL.createObjectURL(file);
    wavesurfer.load(fileURL);
  });

  // Play button functionality
  var playButton = document.getElementById('play-button');
  
  var isPlaying = false;

  // Handle play/pause events
  wavesurfer.on('play', function() {
    isPlaying = true;
    playButton.src = "/static/img/pause-icon.svg";
  });

  wavesurfer.on('pause', function() {
    isPlaying = false;
    playButton.src = "/static/img/play-icon.svg";
  });

  playButton.addEventListener('click', function() {
    wavesurfer.playPause();
  });
  
// Get the file input element
var fileInput = document.getElementById('file-input');

// Get the selected file name element
var selectedFileName = document.getElementById('selected-file-name');

// Add an event listener for file selection
fileInput.addEventListener('change', function(event) {
  var selectedFile = event.target.files[0];

  // Display the selected file name
  selectedFileName.textContent = selectedFile.name;

  // Perform desired actions with the selected file
  // For example, you can load the file or extract file information
  // Here, we simply log the file object to the console
  console.log(selectedFile);
});

// Initialize progress bar
var progressBar = document.getElementById('progress');

// Update progress bar
wavesurfer.on('audioprocess', function() {
  var progressPercentage = (wavesurfer.getCurrentTime() / wavesurfer.getDuration()) * 100;
  progressBar.style.width = progressPercentage + '%';

  var elapsedTime = formatTime(wavesurfer.getCurrentTime());
  var remainingTime = formatTime(wavesurfer.getDuration() - wavesurfer.getCurrentTime());

  // Update elapsed time and remaining time
  // Replace 'elapsed-time' and 'remaining-time' with the respective elements in your HTML
  document.getElementById('elapsed-time').innerHTML = elapsedTime;
  document.getElementById('remaining-time').innerHTML = remainingTime;
});

// Utility function to format time in mm:ss format
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ':' + seconds;
}

