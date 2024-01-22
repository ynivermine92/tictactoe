document.querySelectorAll(".select").forEach((select) => {
  const selectBtn = select.querySelector(".select__btn");
  const selectText = select.querySelector(".select__text");
  const selectList = select.querySelector(".select__list");
  const selectItems = selectList.querySelectorAll(".select__item");
  const selectInput = select.querySelector(".select__input");

  selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("active");
    selectList.classList.toggle("active");
    selectList.style.maxHeight
      ? (selectList.style.maxHeight = null)
      : (selectList.style.maxHeight = selectList.scrollHeight + "px");
  });

  let selectClose = () => {
    selectBtn.classList.remove("active");
    selectList.classList.remove("active");
    selectList.removeAttribute("style");
  };

  for (let i = 0; i < selectItems.length; i++) {
    selectItems[0].click();
    selectItems[i].addEventListener("click", () => {
      selectItems.forEach((el) => {
        el.classList.remove("active");
      });
      selectItems[i].classList.add("active");
      selectText.innerText = selectItems[i].innerText;
      selectInput.value = selectItems[i].dataset.value;
      selectClose();
    });
  }

  document.addEventListener("mouseup", (e) => {
    if (!select.contains(e.target)) selectClose();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") selectClose();
  });
});
