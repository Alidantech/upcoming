// Select the image element
var image = document.getElementById('main-image');

// Create a new Color Thief instance
var colorThief = new ColorThief();

// Get the darkest and lightest colors from the image
var colors = colorThief.getPalette(image, 2);

// Set the album image background color to a gradient of the two colors
var albumImage = document.getElementById('album-image');
albumImage.style.background = 'linear-gradient(to bottom, rgb(' + colors[0].join(',') + '), rgb(' + colors[1].join(',') + '))';

// Set the song details text color to a contrasting color based on the brightness of the colors
var songDetails = document.getElementById('song-details');
var brightness = (299 * colors[0][0] + 587 * colors[0][1] + 114 * colors[0][2]) / 1000;
var textColor = brightness > 128 ? '#000' : '#fff';
songDetails.style.color = textColor;

// Set the song name and artist
var songName = document.getElementById('song-name');
songName.textContent = 'Song Name';
var artistName = document.getElementById('artist-name');
artistName.textContent = 'Artist Name';