// accordion
const accordion = () => {
    const accordionTitles = document.querySelectorAll(".acardion__title");
    accordionTitles.forEach(function (title) {
      title.addEventListener("click", function () {
        const thisTitle = this;
  
        if (!thisTitle.classList.contains("active")) {
          const accordionContents = document.querySelectorAll(".acardion__content");
          const symbols = document.querySelectorAll(".symbol");
  
          accordionContents.forEach(function (content) {
            content.style.display = "none";
          });
  
          accordionTitles.forEach(function (title) {
            title.classList.remove("active");
          });
  
          symbols.forEach(function (symbol) {
            symbol.classList.remove("symbol__rotate");
          });
        }
  
        thisTitle.classList.toggle("active");
        const nextContent = thisTitle.nextElementSibling;
        if (nextContent.style.display === "none") {
          nextContent.style.display = "block";
        } else {
          nextContent.style.display = "none";
        }
  
        const symbol = thisTitle.querySelector(".symbol");
        symbol.classList.toggle("symbol__rotate");
      });
    });

}
accordion();

