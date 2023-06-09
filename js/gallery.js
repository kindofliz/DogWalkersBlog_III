//7. DISPLAY ADDITIONAL SECTION WHEN USER SCROLLS TO IT DOM
// Get the section element
const contestSection = document.querySelector('#contest');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Check if the section is in view
    if (isInViewport(contestSection)) {
        // If it is, add the "visible" class to show the section
        contestSection.classList.add('visible');
        contestSection.classList.remove('hidden');
    } else {
        // If it's not, remove the "visible" class to hide the section
        contestSection.classList.add('hidden');
        contestSection.classList.remove('visible');
    }
});

// Helper function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


//FUNCTION THAT CALCULATES TIME UNTIL THE SET DEADLINE
function getTimeRemaining() {
  const deadline = new Date('June 10, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = deadline - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  return `${days} days ${hours} hours ${minutes} minutes`;
}

//ADDING THE CALCULATED TIME INTO THE SECTION WHERE IT SHOULD BE DISPLAYED ON THE GALLERY PAGE
const contest = document.getElementById('contest');
contestSection.innerHTML = `
  <h2>SOON: Vote for your favorite picture!</h2>
  <p>On July 10th <span style="font-weight:bold; font-style:italic; color:brown;">(in ${getTimeRemaining()})</span> we will start a contest where you can choose your favorite picture from the gallery above and the picture with most votes will be on the cover of our upcoming calendar!</p>`;


//8. CLICKING ON AN IMAGE IN THE GALLERY DOM EVENT
// Get all the images on the page
const images = document.getElementsByTagName("img");

// Add a click event listener to each image
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    alert("Sorry, we're still updating the galleries. They will be filled soon!");
  });
}







