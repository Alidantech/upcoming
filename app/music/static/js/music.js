
const content = document.querySelector('.music-container');
const scrollRightButton = document.querySelector('.scroll-btn.right');
const scrollLeftButton = document.querySelector('.scroll-btn.left');

scrollRightButton.addEventListener('click', () => {
  content.scrollBy({
    left: 100, // set your desired scroll distance
    behavior: 'smooth' // enable smooth scrolling
  });
});

scrollLeftButton.addEventListener('click', () => {
  content.scrollBy({
    left: -100, // set your desired scroll distance
    behavior: 'smooth' // enable smooth scrolling
  });
});
