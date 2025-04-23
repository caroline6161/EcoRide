// Animation au scroll
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".scroll");
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});
