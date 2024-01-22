const stars = document.querySelectorAll(".rating__star");
for (const star of stars) {
  star.addEventListener("click", () => {
    for (const star of stars) {
      star.classList.remove("active");
    }
    star.classList.add("active");

    const { rate } = star.dataset;
    star.parentNode.dataset.rateTotal = star.dataset.rate;
  });
}
