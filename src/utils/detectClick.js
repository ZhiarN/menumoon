let lastTapTime = 0;
let lastTappedElement = null;
let singleClickTimer = null;

export function detectClick(card, onSingle, onDouble) {
  const now = Date.now();
  const delta = now - lastTapTime;

  const isSameElement = card === lastTappedElement;
  const isDoubleClick = delta > 0 && delta < 300 && isSameElement;

  if (isDoubleClick) {
    clearTimeout(singleClickTimer);
    singleClickTimer = null;

    onDouble(card);
    lastTapTime = 0;
    lastTappedElement = null;
    return;
  }

  clearTimeout(singleClickTimer);
  singleClickTimer = setTimeout(() => {
    onSingle(card);
    singleClickTimer = null;
  }, 300);

  lastTapTime = now;
  lastTappedElement = card;
}
