const btns = document.querySelectorAll(".read-more__btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("active")
      ? (btn.textContent = "Скрыть")
      : (btn.textContent = "Читать дальше");

    const content = this.previousElementSibling;
    content.classList.toggle("active");
    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = content.scrollHeight + "px");
  });
});
