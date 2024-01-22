const showMoreBtn = document.querySelector('.show-more__btn');
const showMoreItems = document.querySelectorAll('.show-more__item').length;
let items = 6;

showMoreBtn.addEventListener('click', () => {
  items += 3;
  const array = Array.from(document.querySelector('.show-more__list').children);
  const visibleItems = array.slice(0, items);

  visibleItems.forEach(el => el.classList.add('visible'));

  if (visibleItems.length === showMoreItems) {
    showMoreBtn.style.display = 'none';
  }
});
