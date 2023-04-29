// Load Wavesurfer.js library
var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'blue',
  progressColor: 'brown'
});

// Handle file selection
var fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', function() {
  var file = this.files[0];
  
  // Load audio file using FileReader API
  var reader = new FileReader();
  reader.onload = function(e) {
    var audioBlob = new Blob([e.target.result], { type: file.type });
    var audioUrl = URL.createObjectURL(audioBlob);
    wavesurfer.load(audioUrl);
  };
  reader.readAsArrayBuffer(file);
});

// Add event listener to play button
var playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', function() {
  // Start playing audio
  wavesurfer.play();
  
  // Update progress bar as audio plays
  wavesurfer.on('audioprocess', function() {
    var progress = wavesurfer.getCurrentTime() / wavesurfer.getDuration();
    var progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress * 100 + '%';
  });
});

// Add event listeners to update loading progress bar
wavesurfer.on('loading', function(progress) {
  var loadingBar = document.getElementById('loadingBar');
  loadingBar.style.width = progress * 1 + '%';
  console.log(progress);
});

wavesurfer.on('ready', function() {
  var loadingContainer = document.getElementById('loadingContainer');
  loadingContainer.style.display = 'none';
});

