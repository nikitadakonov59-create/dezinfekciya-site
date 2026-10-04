document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Заявка отправлена! Мы свяжемся с вами в течение 15 минут.');
      form.reset();
    });
  }
});