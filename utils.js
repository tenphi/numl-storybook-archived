import Lockr from 'lockr';

const Nude = window.Nude;
const html = document.querySelector('html');
const AUTO_SCHEME = 'nu-prefers-color-scheme';
const LIGHT_SCHEME = 'nu-prefers-color-scheme-light';
const DARK_SCHEME = 'nu-prefers-color-scheme-dark';
const AUTO_CONTRAST = 'nu-prefers-contrast';
const HIGH_CONTRAST = 'nu-prefers-contrast-high';
const AUTO_REDUCED_MOTION = 'nu-prefers-reduced-motion';
const REDUCE_REDUCED_MOTION = 'nu-prefers-reduced-motion-reduce';

export function clearSchemeSwitch() {
  [AUTO_SCHEME, LIGHT_SCHEME, DARK_SCHEME]
    .forEach(cls => html.classList.remove(cls));
}

export function clearContrastSwitch() {
  [AUTO_CONTRAST, HIGH_CONTRAST]
    .forEach(cls => html.classList.remove(cls));
}

export function clearReducedMotionSwitch() {
  [AUTO_REDUCED_MOTION, REDUCE_REDUCED_MOTION]
    .forEach(cls => html.classList.remove(cls));
}

export function setScheme(type) {
  clearSchemeSwitch();

  switch (type) {
    case 'auto':
      html.classList.add(AUTO_SCHEME);
      break;
    case 'light':
      html.classList.add(LIGHT_SCHEME);
      break;
    case 'dark':
      html.classList.add(DARK_SCHEME);
      break;
    default:
      return;
  }

  Lockr.set('numl:scheme', type);
}

export function setContrast(type) {
  clearContrastSwitch();

  switch (type) {
    case 'auto':
      html.classList.add(AUTO_CONTRAST);
      break;
    case 'high':
      html.classList.add(HIGH_CONTRAST);
      break;
    case 'normal':
      break;
    default:
      return;
  }

  Lockr.set('numl:contrast', type);
}

export function setReducedMotion(type) {
  clearReducedMotionSwitch();

  switch (type) {
    case 'auto':
      html.classList.add(AUTO_REDUCED_MOTION);
      break;
    case 'yes':
      html.classList.add(REDUCE_REDUCED_MOTION);
      break;
    case 'no':
      break;
    default:
      return;
  }

  Lockr.set('numl:reduced-motion', type);
}

function initPage() {
  const root = Nude.getElementById('root');

  root.removeAttribute('hide');

  const runtime = Nude.getElementById('runtime');
  const content = Nude.getElementById('content');

  const runtimeCode = runtime.querySelector('textarea');

  let runtimeCodeCache = '';

  runtimeCode.textContent = '';

  function updateRuntime() {
    if (Lockr.get('nav:value') === 'runtime') {
      let newRuntimeCode = content.innerHTML.trim()
        .replace(/=""/g, '');

      if (newRuntimeCode.includes('<textarea>')) {
        newRuntimeCode = '';
      }

      if (runtimeCodeCache === newRuntimeCode) return;

      runtimeCode.textContent = newRuntimeCode || '';

      runtimeCodeCache = runtimeCode.textContent || '';
    }
  }

  const nav = Nude.getElementById('nav');

  nav.setAttribute('value', Lockr.get('nav:value') || 'none');

  nav.addEventListener('input', (event) => {
    Lockr.set('nav:value', event.detail);
  });

  setInterval(updateRuntime, 2000);

  updateRuntime();

  // scheme
  const schemeEl = Nude.getElementById('scheme');

  schemeEl.setAttribute('value', Lockr.get('numl:scheme') || 'auto');

  schemeEl.addEventListener('input', (event) => {
    setScheme(event.detail);
  });

  // contrast
  const contrastEl = Nude.getElementById('contrast');

  contrastEl.addEventListener('input', (event) => {
    setContrast(event.detail);
  });

  contrastEl.setAttribute('value', Lockr.get('numl:contrast') || 'auto');

  // contrast
  const motionEl = Nude.getElementById('reduced-motion');

  motionEl.addEventListener('input', (event) => {
    setReducedMotion(event.detail);
  });

  motionEl.setAttribute('value', Lockr.get('numl:reduced-motion') || 'auto');

  // theme options
  const themeEl = document.getElementById('options-theme');
  const themeTypeEl = Nude.getElementById('theme-type');
  const pastelPaletteEl = Nude.getElementById('pastel-palette');
  const hueEl = Nude.getElementById('hue');
  const hueValueEl = Nude.getElementById('hue-value');
  const saturationEl = Nude.getElementById('saturation');
  const saturationValueEl = Nude.getElementById('saturation-value');

  themeTypeEl.addEventListener('input', (event) => {
    let type = event.detail;

    type = (type === 'main') ? '' : type;

    themeEl.setAttribute('mod', type === 'main' ? '' : type);

    Lockr.set('numl:theme-type', type);
  });

  pastelPaletteEl.addEventListener('input', (event) => {
    const type = event.detail;

    if (type) {
      themeEl.setAttribute('pastel', '');
    } else {
      themeEl.removeAttribute('pastel');
    }

    Lockr.set('numl:pastel-palette', type);
  });

  hueEl.addEventListener('input', (event) => {
    const hue = event.detail;

    themeEl.setAttribute('hue', hue);
    hueValueEl.innerText = hue;

    Lockr.set('numl:hue', hue);
  });

  saturationEl.addEventListener('input', (event) => {
    const saturation = event.detail;

    themeEl.setAttribute('saturation', saturation);
    saturationValueEl.innerText = saturation;

    Lockr.set('numl:saturation', saturation);
  });

  const storedThemeType = Lockr.get('numl:theme-type');
  const storedPastelPalette = Lockr.get('numl:pastel-palette');
  const storedHue = Lockr.get('numl:hue');
  const storedSaturation = Lockr.get('numl:saturation');

  if (storedThemeType) {
    themeTypeEl.setAttribute('value', storedThemeType || 'main');
  }

  if (storedPastelPalette) {
    pastelPaletteEl.setAttribute('checked', '');
  }

  if (storedHue != null) {
    hueEl.setAttribute('value', storedHue);
    themeEl.setAttribute('hue', storedHue);
  }

  if (storedSaturation != null) {
    saturationEl.setAttribute('value', storedSaturation);
    themeEl.setAttribute('saturation', storedSaturation);
  }

  hueValueEl.innerText = hueEl.nuValue;
  saturationValueEl.innerText = saturationEl.nuValue;
}

export function wrapper(template) {
  template = template.trim();

  setTimeout(initPage, 100);

  return `
<nu-flow
  id="root" hide="y"
  width="100%" height="min(100vh)" padding="2x"
  responsive="980px|720px|520px" fill gap="2x">
  <nu-theme id="options-theme" hue="252"></nu-theme>
  <nu-attrs
    for="section"
    height="clamp(initial, 22x, 22x)" padding="1x 2x" overflow="auto"></nu-attrs>
  
  <nu-flow padding="24x bottom" id="content" gap="2x">
    ${template}
  </nu-flow>
  
  <nu-block
    border="top color(special)" radius="0" width="100vw"
    fill place="fixed bottom" z="9999">
    <nu-theme hue="252"></nu-theme>
    <nu-tablist value="none" border="bottom inside" padding="0 2x" id="nav">
      <nu-tab value="none">
        <nu-icon name="x"></nu-icon>
      </nu-tab>
      <nu-tab value="source" controls="source">
        Source      
      </nu-tab>
      <nu-tab value="runtime" controls="runtime">
        Runtime
      </nu-tab>
      <nu-tab value="options" controls="options">
        Options
      </nu-tab>
    </nu-tablist>
    
    <nu-code as="section" id="source" hidden enumerate>
      <textarea>${template
        .replace('<', '&lt;')
        .replace('>', '&gt;')}</textarea>
    </nu-code>
    
    <nu-code as="section" id="runtime" hidden enumerate>
      <textarea></textarea>
    </nu-code>
    
    <nu-block as="section" id="options" hidden>
      <nu-flex gap="2x" flow="row wrap" items-grow="1">
        <nu-card padding="1x 2x">
          <nu-radiogroup id="scheme" display="flex" flow="column" gap value="auto">
            <nu-el text="w6">Scheme</nu-el>
            <nu-flex gap items="center">
              <nu-radio value="auto" labelledby=":next"></nu-radio>
              <nu-label>Auto</nu-label>
            </nu-flex>
            <nu-flex gap items="center">
              <nu-radio value="light" labelledby=":next"></nu-radio>
              <nu-label>Light</nu-label>
            </nu-flex>
            <nu-flex gap items="center">
              <nu-radio value="dark" labelledby=":next"></nu-radio>
              <nu-label>Dark</nu-label>
            </nu-flex>
          </nu-radiogroup>
        </nu-card>
        
        <nu-card padding="1x 2x">
          <nu-radiogroup id="contrast" display="flex" flow="column" gap value="auto">
            <nu-el text="w6">Contrast</nu-el>
            <nu-flex gap items="center">
              <nu-radio value="auto" labelledby=":next"></nu-radio>
              <nu-label>Auto</nu-label>
            </nu-flex>
            <nu-flex gap items="center">
              <nu-radio value="high" labelledby=":next"></nu-radio>
              <nu-label>High</nu-label>
            </nu-flex>
            <nu-flex gap items="center">
              <nu-radio value="normal" labelledby=":next"></nu-radio>
              <nu-label>Normal</nu-label>
            </nu-flex>
          </nu-radiogroup>
        </nu-card>
        
        <nu-card padding="1x 2x">
          <nu-radiogroup id="reduced-motion" display="flex" flow="column" gap value="auto">
            <nu-el text="w6">Reduced motion</nu-el>
            <nu-flex gap items="center">
              <nu-radio value="auto" labelledby=":next"></nu-radio>
              <nu-label>Auto</nu-label>
            </nu-flex>
            <nu-flex gap items="center">
              <nu-radio value="yes" labelledby=":next"></nu-radio>
              <nu-label>Yes</nu-label>
            </nu-flex>
            <nu-flex gap items="center">
              <nu-radio value="no" labelledby=":next"></nu-radio>
              <nu-label>No</nu-label>
            </nu-flex>
          </nu-radiogroup>
        </nu-card>
        
        <nu-card padding="1x 2x">
          <nu-flow gap>
            <nu-pane>
              <nu-el text="w6">Main Theme</nu-el>
              <nu-block>
                <nu-checkbox id="pastel-palette" labelledby=":next"></nu-checkbox>
                <nu-label>Pastel palette</nu-label>            
              </nu-block>
            </nu-pane>
            <nu-btngroup id="theme-type" value="main" size="xs" items-padding>
              <nu-btn value="main">Main</nu-btn>
              <nu-btn value="tint">Tint</nu-btn>
              <nu-btn value="tone">Tone</nu-btn>
              <nu-btn value="swap">Swap</nu-btn>
              <nu-btn value="special">Special</nu-btn>
            </nu-btngroup>
            <nu-grid gap="1x 2x" items="center stretch" columns="auto 1fr 4x">
              <nu-el place="center end">Hue</nu-el>
              <nu-rail>
                <nu-slider id="hue" value="252" min="0" max="359"></nu-slider>
              </nu-rail>
              <nu-el id="hue-value"></nu-el>
              <nu-el place="center end">Saturation</nu-el>
              <nu-rail>
                <nu-slider id="saturation" value="80" min="0" max="100"></nu-slider>
              </nu-rail>
              <nu-el id="saturation-value"></nu-el>
            </nu-grid>
          </nu-flow>
        </nu-card>
      </nu-flex>
    </nu-block>
  </nu-block>
</nu-flow>`;
}
