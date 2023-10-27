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

/**
 * The audio recorder
 */
const recordButton = document.getElementById('start-record');
const pauseButton = document.getElementById('pause');
const progressBarRec = document.getElementById('progressFill');
const elapsedTime = document.getElementById('elapsed-time');
const remainingTime = document.getElementById('remaining-time');

let mediaRecorder;
let chunks = [];
let startTime;
let timerInterval;
let isPaused = false;

// Function to update the recording progress
function updateProgress() {
  const elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(elapsedTimeInSeconds / 60);
  const seconds = elapsedTimeInSeconds % 60;

  // Update elapsed time display
  elapsedTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Update progress bar
  progressBarRec.style.width = `${(elapsedTimeInSeconds / MAX_RECORDING_TIME) * 100}%`;

  // Update remaining time
  const remainingTimeInSeconds = MAX_RECORDING_TIME - elapsedTimeInSeconds;
  const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);
  const remainingSeconds = remainingTimeInSeconds % 60;
  remainingTime.textContent = `${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Event listener for record button
recordButton.addEventListener('click', function () {
  if (!mediaRecorder || mediaRecorder.state === 'inactive') {
    // Reset progress and chunks
    progressBarRec.style.width = '0%';
    elapsedTime.textContent = '00:00';
    remainingTime.textContent = '02:00';
    chunks = [];

    // Start recording
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function (stream) {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data);
        };

        mediaRecorder.onstart = function () {
          startTime = Date.now();
          timerInterval = setInterval(updateProgress, 1000);
        };

        mediaRecorder.onstop = function () {
          clearInterval(timerInterval);
          const audioBlob = new Blob(chunks, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);

          // Set the recorded audio as the source for the audio element
          const audioPlayer = document.getElementById('recorded-file-name');
          audioPlayer.src = audioUrl;

          // Enable playback controls
          audioPlayer.controls = true;

          // Update the recorded file name display
          audioPlayer.textContent = 'Audio Recorded';

          // Stop the media tracks
          stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();
      })
      .catch(function (err) {
        console.error('Error accessing microphone:', err);
      });
  } else if (mediaRecorder.state === 'paused') {
    // Resume recording
    mediaRecorder.resume();
    isPaused = false;
    startTime += Date.now() - pauseStartTime;
    timerInterval = setInterval(updateProgress, 1000);
  }
});

// Event listener for pause button
pauseButton.addEventListener('click', function () {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    // Pause recording
    mediaRecorder.pause();
    isPaused = true;
    pauseStartTime = Date.now();
    clearInterval(timerInterval);
  }
});

// Define the maximum recording time (in seconds)
const MAX_RECORDING_TIME = 120;
