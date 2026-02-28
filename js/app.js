// =========================
// SECTION LIST
// =========================
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

// =========================
// LOAD LOADER
// =========================
async function loadLoader() {
  try {
    const res = await fetch('sections/loader.html');
    if (!res.ok) throw new Error('Failed to load loader.html');
    const html = await res.text();

    if (window.mountLoader) {
      window.mountLoader(html);
    }
  } catch (err) {
    console.error('Loader failed:', err);
  }
}

// =========================
// LOAD SINGLE SECTION
// =========================
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

// =========================
// LOAD ALL SECTIONS SEQUENTIALLY
// =========================
async function loadAllSectionsSequentially() {
  const loadedSections = [];

  for (const section of sections) {
    const wrapper = await loadSection(section);
    if (wrapper) loadedSections.push(wrapper);
  }

  return loadedSections;
}

// =========================
// ANIMATIONS
// =========================
function initAnimations(sectionsArray) {
  gsap.from(sectionsArray, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
}

// =========================
// APP INIT
// =========================
async function initApp() {

  // 1️⃣ Mount loader first
  await loadLoader();

  // 2️⃣ Mount all sections strictly in order
  const mountedSections = await loadAllSectionsSequentially();

  // 3️⃣ Animate sections
  initAnimations(mountedSections);

  // 4️⃣ Hide loader after delay (if function exists)
  if (window.hideLoaderAfterDelay) {
    window.hideLoaderAfterDelay(3000);
  }
}

// =========================
// START APP
// =========================
initApp();