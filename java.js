 document.addEventListener('DOMContentLoaded', () => {
  const channelCards = document.querySelectorAll('.channel-card');
  let currentFocus = 0;

  const updateFocus = (newFocus) => {
    channelCards.forEach(card => {
      card.classList.remove('keyboard-focus');
      card.setAttribute('tabindex', '-1'); // Make it non-focusable
    });

    const newFocusedCard = channelCards[newFocus];
    newFocusedCard.classList.add('keyboard-focus');
    newFocusedCard.setAttribute('tabindex', '0'); // Make it focusable
    newFocusedCard.focus(); // Set the focus
    newFocusedCard.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  updateFocus(currentFocus);

  document.addEventListener('keydown', (e) => {
    const totalCards = channelCards.length;
    const perRow = Math.floor(document.querySelector('.channels').offsetWidth / channelCards[0].offsetWidth);
    
    switch(e.key) {
      case 'ArrowLeft':
        if (currentFocus > 0) {
          currentFocus -= 1;
          updateFocus(currentFocus);
        }
        break;
      case 'ArrowRight':
        if (currentFocus < totalCards - 1) {
          currentFocus += 1;
          updateFocus(currentFocus);
        }
        break;
      case 'ArrowUp':
        if (currentFocus - perRow >= 0) {
          currentFocus -= perRow;
          updateFocus(currentFocus);
        }
        break;
      case 'ArrowDown':
        if (currentFocus + perRow < totalCards) {
          currentFocus += perRow;
          updateFocus(currentFocus);
        }
        break;
      case 'Enter':
        const focusedCard = channelCards[currentFocus];
        if (focusedCard && focusedCard.tagName.toLowerCase() === 'a') {
          focusedCard.click();
        }
        break;
    }
  });

  // Add tabindex to all cards and setup focus/blur events
  channelCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('focus', () => {
      currentFocus = index;
      updateFocus(currentFocus);
    });

    card.addEventListener('blur', () => {
      card.classList.remove('keyboard-focus');
    });
  });
});
