import { wrapper } from '../utils';

const $ = wrapper;

export default {
  title: 'Widget elements',
};


export const buttons = () => {
  return $(`
<nu-flex flow="row wrap" gap>
  <nu-btn>
    Base button
  </nu-btn>
  <nu-btn special>
    Special button
  </nu-btn>
  <nu-btn disabled>
    Disabled button
  </nu-btn>
  <nu-btn disabled special>
    Disabled special button
  </nu-btn>
  <nu-btn role="checkbox">
    Checkbox button
  </nu-btn>
</nu-flex>

<nu-flex flow="row wrap" gap>
  <nu-btn special flow="row">
    <nu-heading level="4">Big Button</nu-heading>
    <nu-line></nu-line>
    <nu-block>Paragraph</nu-block>
  </nu-btn>
  <nu-btn special flow="row">
    <nu-heading level="4">Special Big Button</nu-heading>
    <nu-line></nu-line>
    <nu-block>Paragraph</nu-block>
  </nu-btn>
</nu-flex>
`);
};

export const buttonGroups = () => {
  return $(`
<nu-heading level="4">Group of buttons</nu-heading>

<nu-btngroup value="one">
  <nu-btn value="one">One</nu-btn>
  <nu-btn value="two">Two</nu-btn>
  <nu-btn value="three">Three</nu-btn>
</nu-btngroup>

<nu-line></nu-line>

<nu-heading level="4">Vertical group of buttons</nu-heading>

<nu-btngroup value="two" flow="column" width="max(16)">
  <nu-btn value="one">One</nu-btn>
  <nu-btn value="two">Two</nu-btn>
  <nu-btn value="three">Three</nu-btn>
</nu-btngroup>`);
};

export const sliders = () => {
  return $(`
<nu-heading level="4">Horizontal slider</nu-heading>
<nu-rail width="clamp(initial, 20, 100%)">
  <nu-slider value="20"></nu-slider>
</nu-rail>

<nu-line></nu-line>

<nu-heading level="4">Disabled slider</nu-heading>
<nu-flex gap items="center">
  <nu-rail width="clamp(initial, 20, 100%)" disabled>
    <nu-slider value="20"></nu-slider>
  </nu-rail>
</nu-flex>

<nu-line></nu-line>

<nu-heading level="4">Vertical slider</nu-heading>
<nu-rail height="6" orient="v">
  <nu-slider value="40"></nu-slider>
</nu-rail>

<nu-line></nu-line>

<nu-heading level="4">Slider with min and max attributes</nu-heading>
<nu-block>
  <nu-rail width="clamp(initial, 20, 100%)">
    <nu-slider value="15" min="10" max="20"></nu-slider>
  </nu-rail>
  <nu-label>Slider</nu-label>
</nu-block>

<nu-line></nu-line>

<nu-heading level="4">Slider with step attrribute</nu-heading>
<nu-rail width="clamp(initial, 20, 100%)">
  <nu-slider value="15" step="10"></nu-slider>
</nu-rail>`);
};

export const tabs = () => {
  return $(`
<nu-attrs for="section" grow="1"></nu-attrs>

<nu-card gap>
  <nu-heading level="4">Direction: bottom</nu-heading>

  <nu-flow gap>
    <nu-tablist value="first" gap="2x" border="inside bottom">
      <nu-tab controls="first">First</nu-tab>
      <nu-tab controls="second">Second</nu-tab>
      <nu-tab controls="third">Third</nu-tab>
      <nu-tab controls="fourth">Fourth</nu-tab>
    </nu-tablist>
    
    <nu-block as="section">
      <nu-block id="first">First tab panel</nu-block>
      <nu-block id="second">Second tab panel</nu-block>
      <nu-block id="third">Third tab panel</nu-block>
      <nu-block id="fourth">Fourth tab panel</nu-block>
    </nu-block>
  </nu-flow>
</nu-card>

<nu-card gap>
  <nu-heading level="4">Direction: top</nu-heading>

  <nu-flow gap> 
    <nu-block as="section">
      <nu-block id="first">First tab panel</nu-block>
      <nu-block id="second">Second tab panel</nu-block>
      <nu-block id="third">Third tab panel</nu-block>
      <nu-block id="fourth">Fourth tab panel</nu-block>
    </nu-block>
    
    <nu-tablist value="second" gap="2x" border="inside top" direction="top">
      <nu-tab controls="first">First</nu-tab>
      <nu-tab controls="second">Second</nu-tab>
      <nu-tab controls="third">Third</nu-tab>
      <nu-tab controls="fourth">Fourth</nu-tab>
    </nu-tablist>
  </nu-flow>
</nu-card>

<nu-card gap>
  <nu-heading level="4">Direction: right</nu-heading>
  
  <nu-flex gap="2x">
    <nu-tablist value="third" border="inside right" direction="right">
      <nu-tab controls="first">First</nu-tab>
      <nu-tab controls="second">Second</nu-tab>
      <nu-tab controls="third">Third</nu-tab>
      <nu-tab controls="fourth">Fourth</nu-tab>
    </nu-tablist>
  
    <nu-block as="section">
      <nu-block id="first">First tab panel</nu-block>
      <nu-block id="second">Second tab panel</nu-block>
      <nu-block id="third">Third tab panel</nu-block>
      <nu-block id="fourth">Fourth tab panel</nu-block>
    </nu-block>
  </nu-flex>
</nu-card>

<nu-card gap>
  <nu-heading level="4">Direction: left</nu-heading>
  
  <nu-flex gap="2x">
    <nu-block as="section" text="right">
      <nu-block id="first">First tab panel</nu-block>
      <nu-block id="second">Second tab panel</nu-block>
      <nu-block id="third">Third tab panel</nu-block>
      <nu-block id="fourth">Fourth tab panel</nu-block>
    </nu-block>
    
    <nu-tablist value="fourth" border="inside left" direction="left">
      <nu-tab controls="first">First</nu-tab>
      <nu-tab controls="second">Second</nu-tab>
      <nu-tab controls="third">Third</nu-tab>
      <nu-tab controls="fourth">Fourth</nu-tab>
    </nu-tablist>
  </nu-flex>
</nu-card>`);
};

export const tabsComplex = () => {
  return $(`
<nu-card gap>
  <nu-flow>
    <nu-tablist value="first" gap="2x" padding="0 1x" space="1b bottom">
      <nu-tab controls="first">First</nu-tab>
      <nu-tab controls="second">Second</nu-tab>
      <nu-tab controls="third">Third</nu-tab>
      <nu-tab controls="fourth">Fourth</nu-tab>
    </nu-tablist>
    
    <nu-block radius padding fill theme="tone">
      <nu-block id="first">First tab panel</nu-block>
      <nu-block id="second">Second tab panel</nu-block>
      <nu-block id="third">Third tab panel</nu-block>
      <nu-block id="fourth">Fourth tab panel</nu-block>
    </nu-block>
  </nu-flow>
</nu-card>`);
}

export const popups = () => {
  return $(`
<nu-heading level="3">Popups</nu-heading>
<nu-attrs for="icon" name="chevron-down" scale="^:pressed[flip-y]" size="1.25em"></nu-attrs>

<nu-flow gap>
  <nu-heading level="4">Simple dropdown</nu-heading>
  <nu-block>
    You can create awesome <nu-mark>Dropdowns</nu-mark> using primitives: <nu-mark>nu-btn</nu-mark> , <nu-mark>nu-icon</nu-mark> and <nu-mark>nu-popup</nu-mark> .
  </nu-block>
  <nu-btn>
    Button label
    <nu-icon as="icon"></nu-icon>
    <nu-popup>
      Popup content 
    </nu-popup>  
  </nu-btn>
  <nu-card padding="1x 2x" theme="tone">
    <nu-mark>Note:</nu-mark> Do not abuse the use of popups on mobile screens.
  </nu-card>
</nu-flow>

<nu-line></nu-line>

<nu-flow gap>
  <nu-heading level="4">Drop directions</nu-heading>
  <nu-block>
    It's possible to position popup as you like.
  </nu-block>
  <nu-flex gap flow="column" items="center">
    <nu-btn special>
      <nu-el text="monospace">[drop="down"]</nu-el>
      <nu-icon as="icon"></nu-icon>
      <nu-popup>Popup content</nu-popup>  
    </nu-btn>
    <nu-btn special>
      <nu-el text="monospace">[drop="right"]</nu-el>
      <nu-icon as="icon" rotate="270deg"></nu-icon>
      <nu-popup drop="right">Popup content</nu-popup>  
    </nu-btn>
    <nu-btn special>
      <nu-el text="monospace">[drop="up"]</nu-el>
      <nu-icon as="icon" rotate="180deg"></nu-icon>
      <nu-popup drop="up">Popup content</nu-popup>  
    </nu-btn>
    <nu-btn special>
      <nu-icon as="icon" rotate="90deg"></nu-icon>
      <nu-el text="monospace">[drop="left"]</nu-el>
      <nu-popup drop="left">Popup content</nu-popup>  
    </nu-btn>
  </nu-flex>
<nu-line></nu-line>

<nu-flow gap>
  <nu-heading level="4">Parent overflow</nu-heading>
  <nu-block>
    You can use <nu-mark>fixate mixin</nu-mark> for Popups so they can ignore <nu-mark>overflow: hidden</nu-mark> on parent elements.
  </nu-block>
  <nu-card overflow="no" gap>
    <nu-block>
      Card with <nu-mark>overflow: hidden</nu-mark>. 
    </nu-block>
    <nu-flex gap>
      <nu-btn special>
        <nu-el text="monospace">[drop="down"]</nu-el>
        <nu-icon as="icon"></nu-icon>
        <nu-popup theme="tone" drop="down">
          Popup content 
        </nu-popup>  
      </nu-btn>
      
      <nu-btn special>
        <nu-el text="monospace">[place="outside-bottom"]</nu-el>
        <nu-icon as="icon"></nu-icon>
        <nu-popup place="outside-bottom" theme="tone">
          Popup content 
        </nu-popup>  
      </nu-btn>
    </nu-flex>
  </nu-card>
</nu-flow>

<nu-line></nu-line>

<nu-flow gap>
  <nu-heading level="4">Window overflow</nu-heading>
  <nu-block>
    Popups uses horizontal corrections to make sure they fit into the window. It works the same for <nu-mark>[drop]</nu-mark> and <nu-mark>[place]</nu-mark> positioning.
  </nu-block>
  <nu-pane>
    <nu-btn>
      <nu-icon as="icon"></nu-icon>
      <nu-popup width="16">
        Popup content
      </nu-popup>    
    </nu-btn>
    <nu-btn>
      <nu-icon as="icon"></nu-icon>
      <nu-popup width="16">
        Popup content
      </nu-popup>    
    </nu-btn>
  </nu-pane>
</nu-flow>

<nu-line></nu-line>

<nu-flow gap>
  <nu-heading level="4">Dropdown menu</nu-heading>
  <nu-block>
    You can even create dropdown menu that works exactly like you expected: The dropdown will be closed after you choose an item.
  </nu-block>
  <nu-block>
    Popup menus are fully accessible. You can use keyboard to navigate over them.
  </nu-block>
  <nu-block>
    Note that Submenu's popup can't have <nu-mark>[drop]</nu-mark> attribute. Use <nu-mark>[place]</nu-mark> instead.
  </nu-block>
  <nu-block>
    <nu-btn special>
      <nu-block text="w6">
        <nu-icon name="command"></nu-icon>
        Menu
      </nu-block>
      <nu-icon as="icon"></nu-icon>
      <nu-popupmenu fixate="bottom" width="11">
        <nu-menuitem value="first-item">Item level 1</nu-menuitem>
        <nu-menuitem>
          Submenu level 1
          <nu-popupmenu place="outside-right top">
            <nu-menuitem>Item level 2</nu-menuitem>
            <nu-menuitem>
              Submenu level 2
              <nu-popupmenu place="outside-right top">
                <nu-menuitem>Item level 3</nu-menuitem>
                <nu-menuitem>etc...</nu-menuitem>
              </nu-popupmenu>
            </nu-menuitem>
          </nu-popupmenu>
        </nu-menuitem>
      </nu-popupmenu>
    </nu-btn>
  </nu-block>
</nu-flow>

<nu-line></nu-line>

<nu-flow gap>
  <nu-heading level="4">Popup closing</nu-heading>
  <nu-block>
    Use button with <nu-mark text="monospace">[action="submit"]</nu-mark> to close parent dropdown. Any other button won't have the same effect unless it's a menu.
  </nu-block>
  <nu-block>
    <nu-btn special>
      <nu-el text="w6">Open popup</nu-el>
      <nu-icon as="icon"></nu-icon>
      <nu-popup gap="1x" fixate="bottom" width="clamp(initial, 24, 100vw)">
        <nu-block>
          Button that don't close popup.
        </nu-block>
        <nu-btn>Simple button</nu-btn>
        <nu-block>
          Button that closes popup.
        </nu-block>
        <nu-btn action="submit">Submit button</nu-btn>
      </nu-popup>
    </nu-btn>
  </nu-block>
</nu-flow>

<nu-block height="11"></nu-block>
`);
};

export const switches = () => {
  return $(`
<nu-heading level="4">Switches</nu-heading>

<nu-block size="xs">
  <nu-switch></nu-switch>
  <nu-switch checked></nu-switch>
</nu-block>

<nu-block size="sm">
  <nu-switch></nu-switch>
  <nu-switch checked></nu-switch>
</nu-block>

<nu-block>
  <nu-switch></nu-switch>
  <nu-switch checked></nu-switch>
</nu-block>

<nu-block size="lg">
  <nu-switch></nu-switch>
  <nu-switch checked></nu-switch>
</nu-block>

<nu-block size="xl">
  <nu-switch></nu-switch>
  <nu-switch checked></nu-switch>
</nu-block>

<nu-block>
  <nu-switch disabled></nu-switch>
  <nu-switch checked disabled></nu-switch>
</nu-block>`);
};

export const checkboxes = () => {
  return $(`
<nu-heading level="4">Checkboxes</nu-heading>

<nu-grid
  display="inline-grid" columns="auto auto" rows="auto auto" flow="column" gap="1x 2x">
  <nu-flex gap="1x" items="center">
    <nu-checkbox labelledby="label"></nu-checkbox>
    <nu-label>Checkbox</nu-label>
  </nu-flex>

  <nu-flex gap="1x" items="center">
    <nu-checkbox labelledby="label" checked></nu-checkbox>
    <nu-label>Checked checkbox</nu-label>
  </nu-flex>

  <nu-flex gap="1x" items="center">
    <nu-checkbox labelledby="label" disabled></nu-checkbox>
    <nu-label>Disabled checkbox</nu-label>
  </nu-flex>

  <nu-flex gap="1x" items="center">
    <nu-checkbox labelledby="label" disabled checked></nu-checkbox>
    <nu-label>Disabled and checked checkbox</nu-label>
  </nu-flex>
</nu-grid>`);
};

export const radioButtons = () => {
  return $(`
<nu-heading level="4">Radio buttons</nu-heading>

<nu-grid
  display="inline-grid" columns="auto auto" gap="1x 2x">
  <nu-radiogroup flow="column" gap value="second">
    <nu-flex gap="1x" items="center">
      <nu-radio labelledby=":next" value="first"></nu-radio>
      <nu-label>First value</nu-label>
    </nu-flex>

    <nu-flex gap="1x" items="center">
      <nu-radio labelledby=":next" value="second"></nu-radio>
      <nu-label>Second value</nu-label>
    </nu-flex>

    <nu-flex gap="1x" items="center">
      <nu-radio labelledby=":next" value="third"></nu-radio>
      <nu-label>Third value</nu-label>
    </nu-flex>
  </nu-radiogroup>

  <nu-radiogroup flow="column" gap value="second">
    <nu-flex gap="1x" items="center">
      <nu-radio labelledby=":next" value="first" disabled></nu-radio>
      <nu-label>First value</nu-label>
    </nu-flex>

    <nu-flex gap="1x" items="center">
      <nu-radio labelledby=":next" value="second" disabled></nu-radio>
      <nu-label>Second value</nu-label>
    </nu-flex>

    <nu-flex gap="1x" items="center">
      <nu-radio labelledby=":next" value="third" disabled></nu-radio>
      <nu-label>Third value</nu-label>
    </nu-flex>
  </nu-radiogroup>
</nu-grid>`);
};

export const menus = () => {
  return $(`
<nu-heading level="4">Menus</nu-heading>
<nu-menu width="20" radius border padding="1x 0">
  <nu-menuitem>Menu item 1</nu-menuitem>
  <nu-menuitem>Menu item 2</nu-menuitem>
  <nu-menuitem>...</nu-menuitem>
</nu-menu>`);
};

export const textInputs = () => {
  return $(`
<nu-heading level="4">Simple input</nu-heading>

<nu-block>
  <nu-input width="15" label="Simple input">

  </nu-input>
  
  <nu-input width="15" label="Simple disabled input" disabled>

  </nu-input>
</nu-block>

<nu-heading level="4">Input with icon and button</nu-heading>

<nu-group border radius width="15" fill="input">
  <nu-icon name="user" width="2.5"></nu-icon>
  <nu-input border="0" grow="1" label="Input with icon">

  </nu-input>
  <nu-btn border="left">
    <nu-icon name="x" label="Circle"></nu-icon>
  </nu-btn>
</nu-group>`);
};

export const numberInputs = () => {
  return $(`  
<nu-heading level="4">Number input</nu-heading>

<nu-block>
  Currency input:
  <nu-numinput prefix="$" value="12032" width="8" precision="2"
               label="Number input"></nu-numinput>
</nu-block>

<nu-block>
  Percent input:
  <nu-numinput suffix="%" value="0" min="0" max="100" precision="0" width="8"
               label="Percents input"></nu-numinput>
</nu-block>`);
};

