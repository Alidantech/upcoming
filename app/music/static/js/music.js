const content = document.querySelector('.music-container');
const scrollRightButton = document.querySelector('.scroll-btn.right');
const scrollLeftButton = document.querySelector('.scroll-btn.left');

scrollRightButton.addEventListener('click', () => {
  content.scrollBy({
    left: 100, // set your desired scroll distance
    behavior: 'smooth' // enable smooth scrolling
  });
  checkScrollPosition();
});

scrollLeftButton.addEventListener('click', () => {
  content.scrollBy({
    left: -100, // set your desired scroll distance
    behavior: 'smooth' // enable smooth scrolling
  });
  checkScrollPosition();
});

function checkScrollPosition() {
  // hide left button if already at the beginning
  if (content.scrollLeft === 0) {
    scrollLeftButton.style.display = 'none';
  } else {
    scrollLeftButton.style.display = 'block';
  }

  // hide right button if already at the end
  if (content.scrollWidth - content.scrollLeft === content.clientWidth) {
    scrollRightButton.style.display = 'none';
  } else {
    scrollRightButton.style.display = 'block';
  }
}
