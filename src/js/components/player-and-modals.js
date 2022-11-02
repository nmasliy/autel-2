import Plyr from 'plyr';

import SimpleModal from '../functions/modals';

const player = new Plyr('#player', {
  controls: [
    'play-large',
    'play',
    'progress',
    'current-time',
    'mute',
    'volume',
    'captions',
    'settings',
    'airplay',
    'fullscreen',
  ],
  invertTime: false,
  loadSprite: false,
  iconUrl: 'img/plyr.svg',
  blankVideo: 'video/remote.mp4',
});

const $videoTriggers = document.querySelectorAll('[data-video-trigger]');

$videoTriggers.forEach(($item) => {
  const poster = $item.dataset.videoPoster || '';
  const src = $item.dataset.videoSrc || 'video/remote.mp4';

  $item.addEventListener('click', function () {
    player.source = {
      type: 'video',
      sources: [
        {
          src: src,
          type: 'video/mp4',
        },
      ],
      poster: poster,
    };
  });
});

const $modalCharsTriggers = document.querySelectorAll(
  '.chars__btn[data-chars]'
);

const $modalChars = document.querySelector('#modal-chars');

const options = {
  disableScroll: true,
  transition: 300,
  onClose: (modal) => {
    if (modal.id === 'modal-video') {
      player.stop();
    } else if (modal.id === 'modal-chars') {
      $modalChars.classList.remove('is-active-1');
      $modalChars.classList.remove('is-active-2');
      $modalChars.classList.remove('is-active-3');
    }
  },
  nested: false,
  overlayCloseAll: true,
};
const modals = new SimpleModal(options);
modals.init();

$modalCharsTriggers.forEach(($item) => {
  $item.addEventListener('click', function () {
    const activeItem = $item.dataset.chars;
    const name = $item.dataset.name;
    const $tableTitleMob = document.querySelector('.modal-table__title-mob');
    const $tableTitle = document.querySelector('.modal-complect__title');
    const $tableTitle2 = document.querySelector('.modal-chars__title');

    $tableTitleMob.innerHTML = `Характеристики <br/> <span>${name}</span>`;
    $tableTitle.innerHTML = `комплектация <span>${name}</span>`;
    $tableTitle2.innerHTML = `Характеристики <span>${name}</span>`;

    $modalChars.classList.add('is-active-' + activeItem);
  });
});
