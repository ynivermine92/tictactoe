document.addEventListener("DOMContentLoaded", () => {
  const spollerTriggers = document.querySelectorAll(".js-title");

  const spollerTriggerDisable = (trigger) => {
    trigger.disabled = true;
    setTimeout(() => {
      trigger.disabled = false;
    }, 500);
  };

  const spollerOpen = (trigger, body) => {
    body.style.height = body.scrollHeight + "px";
    if (
      body.style.height === "0px" || window.getComputedStyle(body).height === "0px") {
      trigger.classList.add("open");
    }
  };

  const spollerClose = (trigger, body) => {
    if (
      body.style.height !== "0px" && window.getComputedStyle(body).height !== "0px") {
      trigger.classList.remove("open");
      body.style.height = body.scrollHeight + "px";
      setTimeout(() => {
        body.style.height = "0";
      }, 0);
    }
  };

  const setHeightOnTransitionEnd = (body) => {
    body.addEventListener("transitionend", () => {
      if (body.style.height !== "0px") {
        body.style.height = "auto";
      }
    });
  };

  const spollerToggle = (target) => {
    const trigger = target;
    const body = target.closest(".spoller__item").querySelector(".spoller__body");
    setHeightOnTransitionEnd(body);
    spollerClose(trigger, body);
    spollerOpen(trigger, body);
    spollerTriggerDisable(trigger);
  };

  spollerTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      let self = e.currentTarget;
      spollerToggle(self);
    });
  });
});
