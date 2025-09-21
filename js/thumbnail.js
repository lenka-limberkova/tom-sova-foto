document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', function () {
    const videoId = this.getAttribute('data-id');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.width = "100%";
    iframe.style.height = "315px";
    this.innerHTML = ""; // smaže thumbnail
    this.appendChild(iframe);
  });
});
