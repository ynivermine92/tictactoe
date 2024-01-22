const plans = document.querySelectorAll(".plans__item");

for (let i = 0; i < plans.length; i++) {
  plans[1].classList.add('active');

  plans[i].addEventListener("mouseenter", () => {
    plans.forEach((el) => { el.classList.remove('active') });
    plans[i].classList.add('active');
  });

  plans[i].addEventListener("mouseleave", () => {
    plans.forEach((el) => { el.classList.remove('active') });
    plans[1].classList.add('active');
  });
}
