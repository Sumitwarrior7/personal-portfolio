// Scrolling Functionality
function scrollToPosition(anchor, scrollHeightRem) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    //   This is to convert (multiple of 53)rems to pixels
    const positionInPixels = scrollHeightRem * 53 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    window.scrollTo(0, positionInPixels);
  });
}

const about = document.getElementById('about-anchor');
const skills = document.getElementById('skills-anchor');
const projects = document.getElementById('projects-anchor');
const contact = document.getElementById('contact-anchor');

scrollToPosition(about, 1);
scrollToPosition(skills, 2);
scrollToPosition(projects, 3);
scrollToPosition(contact, 4);



// Function to apply rotation animation to an image
function rotateImage(image) {
  let rotation = 0;
  image.style.transform = `rotate(${rotation}deg)`;

  const rotateInterval = setInterval(() => {
      rotation += 10;
      image.style.transform = `rotate(${rotation}deg)`;
  }, 60);
}
// Apply rotation animation to the portfolio icon
const topImage = document.querySelector('.portfolio-icon');
rotateImage(topImage);
