const heroImage = document.getElementById('heroImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((item) => item.classList.remove('is-active'));
    thumb.classList.add('is-active');
    heroImage.src = thumb.dataset.image;
    heroImage.alt = thumb.dataset.alt;
  });
});
