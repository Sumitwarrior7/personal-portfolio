// Scrolling Functionality
function scrollToPosition(anchor, scrollHeightRem) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    //   This is to convert (multiple of 53)rems to pixels
    const positionInPixels = scrollHeightRem * 53 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Add CSS transition to scroll smoothly
    window.scrollTo({
      top: positionInPixels,
      behavior: 'smooth'
    });
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


// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// API Functionality

// Fetch the random photo URL from the server endpoint
axios.get('http://localhost:3000/random-photo')
  .then(function (response) {
    var image_url = response.data;
    console.log("url :", image_url)

    var top_profile_img_element = document.getElementById('about-profile-img');
    top_profile_img_element.src = image_url
  })
  .catch(function (error) {
    console.log(error);
  });



// Fetch the quote from the server endpoint
axios.get('http://localhost:3000/quote')
  .then(function (response) {
    var quote = response.data;
    console.log("Quote :", quote)
    var quoteElement = document.getElementById('quotes-modal-text');
    quoteElement.textContent = quote;
  })
  .catch(function (error) {
    console.log(error);
  });





