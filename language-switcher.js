(() => {
  const hover = window.matchMedia('(hover: hover) and (pointer: fine)');

  document.querySelectorAll('.language-switcher').forEach(switcher => {
    const trigger = switcher.querySelector('.language-trigger');
    const options = switcher.querySelector('.language-options');
    let pinned = false;

    const setOpen = open => {
      options.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
      if (!open) pinned = false;
    };

    switcher.addEventListener('pointerenter', event => {
      if (hover.matches && event.pointerType === 'mouse') setOpen(true);
    });
    switcher.addEventListener('pointerleave', () => {
      if (!pinned && !switcher.contains(document.activeElement)) setOpen(false);
    });
    trigger.addEventListener('click', () => {
      // A click after hover pins the open list instead of immediately closing it.
      const open = !pinned;
      setOpen(open);
      pinned = open;
    });
    switcher.addEventListener('focusout', event => {
      if (!switcher.contains(event.relatedTarget)) setOpen(false);
    });
    document.addEventListener('click', event => {
      if (!switcher.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !options.hidden) {
        event.preventDefault();
        setOpen(false);
        trigger.focus();
      }
    });

    setOpen(false);
    switcher.classList.add('is-enhanced');
    trigger.hidden = false;
  });
})();
