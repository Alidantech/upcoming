let mediaRecorder; // Variable to store MediaRecorder instance
let recordedChunks = []; // Array to store recorded audio chunks
let progressBar = document.getElementById('progressBar'); // Progress bar element
let recordBtn = document.getElementById('recordBtn'); // Record button element
let stopBtn = document.getElementById('stopBtn'); // Stop button element for recording
let playBtn = document.getElementById('playBtn'); // Play button element
let stopPlaybackBtn = document.getElementById('stopPlaybackBtn'); // Stop button element for playback
let audioPlayer = document.getElementById('audioPlayer'); // Audio player element

recordBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);
playBtn.addEventListener('click', playRecording);
stopPlaybackBtn.addEventListener('click', stopPlayback);

// Start recording function
function startRecording() {
  recordBtn.disabled = true;
  playBtn.disabled = true;
  progressBar.value = 0;
  progressBar.style.display = 'block';
  recordedChunks = [];
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      updateProgressBar();
      mediaRecorder.addEventListener('dataavailable', function(event) {
        recordedChunks.push(event.data);
      });
      mediaRecorder.addEventListener('stop', function() {
        progressBar.style.display = 'none';
        recordBtn.disabled = false;
        playBtn.disabled = false;
        stopBtn.disabled = true;
        stopPlaybackBtn.disabled = true;
        let blob = new Blob(recordedChunks, { type: 'audio/webm' });
        audioPlayer.src = URL.createObjectURL(blob);
        audioPlayer.controls = true;
        audioPlayer.style.display = 'block';
      });
    })
    .catch(function(error) {
      console.error('Error accessing microphone:', error);
    });
}

// Stop recording function
function stopRecording() {
  mediaRecorder.stop();
  stopBtn.disabled = true;
  stopPlaybackBtn.disabled = true;
}

// Play recording function
function playRecording() {
  audioPlayer.play();
  stopBtn.disabled = true;
  stopPlaybackBtn.disabled = false;
}

// Stop playback function
function stopPlayback() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  stopBtn.disabled = false;
  stopPlaybackBtn.disabled = true;
}

// Update progress bar function
function updateProgressBar() {
  let recordingTime = 0;
  let intervalId = setInterval(function() {
    recordingTime += 100;
    progressBar.value = recordingTime / 1000;
    if (mediaRecorder.state === 'inactive') {
      clearInterval(intervalId);
    }
  }, 100);
}
