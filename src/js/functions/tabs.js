(function () {
  const $tabTriggers = document.querySelectorAll('[data-tabs-trigger]');

  if (document.querySelector('[data-tabs-container]')) {
    $tabTriggers.forEach(($trigger) => {
      $trigger.addEventListener('click', function (e) {
        e.preventDefault();

        const $activeTab = document.querySelector('[data-tabs-trigger].is-active');
        const $activeContent = document.querySelector(
          '[data-tabs-content].is-active'
        );
        const id = $trigger.getAttribute('data-tabs');

        if ($activeTab) {
          $activeTab.classList.remove('is-active');
          $activeContent.classList.remove('is-active');
        }
        const $content = document.querySelector(
          '[data-tabs-content][data-tabs="' + id + '"]'
        );

        $trigger.classList.add('is-active');
        $content.classList.add('is-active');
      });
    });
  }
})();
