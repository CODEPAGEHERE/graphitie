function mountLoader(html) {
  const mountPoint = document.getElementById('loader-mount');
  if (mountPoint) {
    mountPoint.innerHTML = html;
  }
}

function hideLoaderAfterDelay(delay = 3000) {
  setTimeout(() => {
    const loader = document.getElementById('app-loader');
    if (!loader) return;

    loader.style.transition = 'opacity 0.6s ease';
    loader.style.opacity = '0';

    setTimeout(() => {
      loader.remove();
    }, 600);
  }, delay);
}

// expose globally (no imports)
window.mountLoader = mountLoader;
window.hideLoaderAfterDelay = hideLoaderAfterDelay;
