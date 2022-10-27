const $searchGroups = document.querySelectorAll('.search__group');

$searchGroups.forEach(($item) => {
  const $input = $item.querySelector('.search__input');
  const $clear = $item.querySelector('.search__btn');

  $clear.addEventListener('click', () => {
    $input.value = '';
    $input.focus();
  });

  $input.addEventListener('input', (e) => {
    if (e.target.value) {
      $item.classList.add('is-active');
    } else {
      $item.classList.remove('is-active');
    }
  });

  $input.addEventListener('blur', () => {
    setTimeout(() => {
      $item.classList.remove('is-active');
    }, 100);
  });
});
