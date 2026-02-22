const sections = [
  'home',
  'about',
  'services',
  'myskills',
  'portfolio',
  'contact',
  'footer'
];

const app = document.getElementById('app');

/**
 * Load loader HTML
 */
async function loadLoader() {
  const res = await fetch('sections/loader.html');
  if (!res.ok) throw new Error('Failed to load loader.html');
  const html = await res.text();

  if (window.mountLoader) {
    window.mountLoader(html);
  }
}

/**
 * Load a single section
 */
async function loadSection(sectionName) {
  try {
    const res = await fetch(`sections/${sectionName}.html`);
    if (!res.ok) throw new Error(`Failed to load ${sectionName}.html`);

    const html = await res.text();

    const wrapper = document.createElement('div');
    wrapper.id = sectionName;
    wrapper.classList.add('section-wrapper');
    wrapper.innerHTML = html;

    app.appendChild(wrapper);
    return wrapper;

  } catch (err) {
    console.error(err);
    return null;
  }
}

/**
 * Load all sections in parallel
 */
async function loadAllSections() {
  const promises = sections.map(loadSection);
  const loaded = await Promise.all(promises);
  return loaded.filter(Boolean);
}

/**
 * Initialize animations
 */
function initAnimations(sectionsArray) {
  gsap.from(sectionsArray, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
}

/**
 * App lifecycle
 */
async function initApp() {

  // 1️⃣ mount loader FIRST
  await loadLoader();

  // 2️⃣ mount all sections
  const mountedSections = await loadAllSections();

  // 3️⃣ animate sections
  initAnimations(mountedSections);

  // 4️⃣ wait 5 seconds AFTER full mount
  if (window.hideLoaderAfterDelay) {
    window.hideLoaderAfterDelay(3000);
  }
}

initApp();
