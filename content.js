function hideMessenger() {
  const messenger = document.querySelector('[aria-label="Messenger"]');
  if (messenger) {
      messenger.style.display = 'none';
  }
}

// รอโหลดเสร็จก่อน
window.addEventListener('load', () => {
  hideMessenger();
  // เผื่อ facebook เป็น SPA (โหลด element ใหม่ตลอด)
  setInterval(hideMessenger, 1000);
});
