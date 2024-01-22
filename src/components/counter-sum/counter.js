document.querySelectorAll(".counter").forEach((counter) => {
  const counterInput = counter.querySelector(".counter__input");
  const btnMinus = counter.querySelector(".minus");
  const btnPlus = counter.querySelector(".plus");
  let count = counterInput.value;

  counterInput.addEventListener("keyup", (e) => {
    let self = e.currentTarget;

    if (self.value == "0") self.value = 1;

    count = counterInput.value;

    disabledBtnMinus();
    disabledBtnPlus();
  });

  counterInput.addEventListener("keypress", (e) => {
    let code = e.which ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  });

  counterInput.addEventListener("change", (e) => {
    let self = e.currentTarget;

    if (!self.value) self.value = 1;

    count = counterInput.value;

    disabledBtnMinus();
    disabledBtnPlus();
  });

  counterInput.addEventListener("focus", (e) => {
    counterInput.value = "";
  });

  counterInput.addEventListener("blur", (e) => {
    let self = e.currentTarget;

    if (!self.value) self.value = 1;

    count = counterInput.value;

    disabledBtnMinus();
  });

  btnPlus.addEventListener("click", (e) => {
    e.preventDefault();

    count++;

    disabledBtnMinus();
    disabledBtnPlus();

    counterInput.value = count;
  });

  btnMinus.addEventListener("click", (e) => {
    e.preventDefault();

    count--;

    disabledBtnMinus();

    count <= 999
      ? btnPlus.classList.remove("disabled")
      : btnPlus.classList.add("disabled");

    counterInput.value = count;
  });

  function disabledBtnMinus() {
    count == 1
      ? btnMinus.classList.add("disabled")
      : btnMinus.classList.remove("disabled");
  }

  function disabledBtnPlus() {
    count >= 999
      ? btnPlus.classList.add("disabled")
      : btnPlus.classList.remove("disabled");
  }
});
