//import { RUNTIME_CONFIG } from './runtime-config.js'; // exposes your Contentful/ImageKit tokens

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
 * Load a single section HTML and append to #app
 * @param {string} sectionName - file name without .html
 */
async function loadSection(sectionName) {
  try {
    const res = await fetch(`sections/${sectionName}.html`);
    if (!res.ok) throw new Error(`Failed to load ${sectionName}.html (status ${res.status})`);
    const html = await res.text();

    const sectionWrapper = document.createElement('div');
    sectionWrapper.id = sectionName;
    sectionWrapper.classList.add('section-wrapper');
    sectionWrapper.innerHTML = html;

    app.appendChild(sectionWrapper);
    console.log(`Mounted section: ${sectionName}`);
    return sectionWrapper;
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
  const loadedSections = await Promise.all(promises);

  // After all sections are mounted, trigger animations
  initAnimations(loadedSections.filter(Boolean));
}

/**
 * Initialize GSAP animations
 * @param {Array} sectionsArray - array of mounted section divs
 */
function initAnimations(sectionsArray) {
  gsap.from(sectionsArray, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
}

// Start SPA
loadAllSections();
