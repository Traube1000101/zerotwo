const multiplier = 0.03;

document.addEventListener("DOMContentLoaded", function(event) {
  // get element on which the hover effect should be applied
  const el = document.getElementById("effect");

  // add hover event listener
  window.addEventListener("mousemove", function(e) {
    // get x and y of mouse relative to viewport
    const mouseX = e.clientX - this.window.scrollX;
    const mouseY = e.clientY - this.window.scrollY;

    // get x and y of element relative to viewport
    const elementRect = el.getBoundingClientRect();
    const elX = elementRect.left;
    const elY = elementRect.top;

    // change style of element background to radial gradient with radius of 50px and set middle of gradient to mouse position
    el.style.backgroundImage = `radial-gradient(circle at ${mouseX - elX}px ${mouseY - elY}px, pink ${420}px, red ${420}px, red ${840}px, black ${840}px)`;
    el.style.transform = "rotateY(" +
    (mouseX - window.outerWidth / 2) * multiplier * -1 +
    "deg) rotateX(" +
    (mouseY - window.outerHeight / 2) * multiplier +
    "deg)"
  });
});
