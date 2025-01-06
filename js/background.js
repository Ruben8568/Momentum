// Main purpose : to show a random background image on the screen.
// regardless of image size, it will cover the whole screen.

// An array of images that will be used as background images
const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
//generate random background image from images array
const chosenImage = images[Math.floor(Math.random() * images.length)];

// function that adds style container with background image to the body
function addBackgroundImage(src) {
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        background-image: url('${src}'); 
        background-size: 100vw 100vh;
      }
    `;
    document.body.appendChild(style);
  }
addBackgroundImage(`img/${chosenImage}`);
