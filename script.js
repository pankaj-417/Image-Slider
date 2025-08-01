// Array of image sources
const images = [
  "imgs/img (1).jpg",
  "imgs/img (2).jpg",
  "imgs/img (3).jpg",
  "imgs/img (4).jpg",
  "imgs/img (5).jpg",
  "imgs/img (6).jpg",
  "imgs/img (7).jpg",
  "imgs/img (8).jpg",
  "imgs/img (9).jpg",
];

// Current image index
let currentIndex = 0;

// Get the current image element
const currentImage = document.getElementById("current-image");

// Get the navigation buttons
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Function to update the current image
function updateImage() {
  currentImage.src = images[currentIndex];
}

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

// Initialize the gallery with the first image
updateImage();
