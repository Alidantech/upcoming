const buttons = document.querySelectorAll('button[title]');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.removeAttribute('title');
  });

  button.addEventListener('mouseleave', () => {
    const tooltip = button.getAttribute('data-tooltip');
    button.setAttribute('title', tooltip);
  });
});
