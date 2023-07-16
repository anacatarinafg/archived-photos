let images = document.querySelectorAll(".gallery__image");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

document.addEventListener("mousemove", function (e) {
    cursorPosition(e)
})

function cursorPosition(e) {
    moveXAmount = e.pageX - prevX;
    moveYAmount = e.pageY - prevY;

    moveImage(moveXAmount, moveYAmount);

    prevX = e.pageX;
    prevY = e.pageY;
}

function moveImage(xAmount, yAmount) {
    images.forEach(function (image) {
      let movementStrength = 5 + (Math.random() * 15);
  
      image.style.left = (image.offsetLeft) - (xAmount / movementStrength) + "px";
      image.style.top = (image.offsetTop) - (yAmount / movementStrength) + "px";
    });
  }