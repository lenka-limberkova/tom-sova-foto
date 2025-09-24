document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const iframe = wrapper.querySelector('iframe');
    const thumb = wrapper.querySelector('.video-thumbnail');
    const videoId = wrapper.getAttribute('data-id');

    // nastavíme src s autoplay
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    iframe.style.display = 'block';
    thumb.style.display = 'none';
  });
});