import WaveSurfer from 'wavesurfer.js';

// Create an instance of WaveSurfer
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

// Load an audio file
wavesurfer.load('example/media/demo.wav');

// Subscribe to the 'ready' event and play the audio once it's ready
wavesurfer.on('ready', function () {
    wavesurfer.play();
});
