const menuOpen  = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['-100vw', '-67vw']}, menuOptions);

  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    //console.log(`${index}番目のリスト`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: ['-67vw', '-100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});
