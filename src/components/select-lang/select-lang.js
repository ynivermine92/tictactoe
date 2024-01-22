document.querySelectorAll(".select").forEach((select) => {
  const selectBtn = select.querySelector(".select__btn");
  const selectList = select.querySelector(".select__list");
  const  selectLinks = select.querySelectorAll(".select__link");

  selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("active");
    selectList.classList.toggle("active");

    if (selectList.style.maxHeight) {
      selectList.style.maxHeight = null;
      selectList.removeAttribute('style');
    } else {
      selectList.style.maxHeight = selectList.scrollHeight + "px";
    }
  });

  selectLinks.forEach((selectLink) => {
    selectLink.addEventListener('click', selectActive)
  });

  function selectActive(e) {
    selectLinks.forEach((selectLink) => {
      selectLink.classList.remove('active');

      if (e.target.closest("a")) {
        selectBtn.innerHTML = "";
        selectBtn.append(e.target.cloneNode(true));

        selectHide();
      }
    });
    this.classList.add('active');
  }

  let selectHide = () => {
    selectBtn.classList.remove("active");
    selectList.classList.remove("active");
    selectList.removeAttribute('style');
  };
  document.addEventListener("mouseup", (e) => {
    if (!select.contains(e.target)) selectHide();
  });
});
