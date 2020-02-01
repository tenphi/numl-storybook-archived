import { wrapper } from '../utils';

const $ = wrapper;

export default {
  title: 'Base elements',
};

export const headings = () => {
  return $(`
<nu-heading>
  Heading level 1
</nu-heading>

<nu-heading level="2">
  Heading level 2
</nu-heading>

<nu-heading level="3">
  Heading level 3
</nu-heading>

<nu-heading level="4">
  Heading level 4
</nu-heading>

<nu-heading level="5">
  Heading level 5
</nu-heading>

<nu-heading level="6">
  Heading level 6
</nu-heading>`);
};

export const links = () => {
  return $(`
<nu-flex gap flow="row wrap">
  <nu-link>Simple link</nu-link>
  <nu-link to="mailto:tenphi@gmail.com?subject=NUDE%20Elements%20feedback">Email link
  </nu-link>
  <nu-link to="https://github.com/tenphi/nude">Open link in the current tab</nu-link>
  <nu-link to="!https://github.com/tenphi/nude">Open link in a new tab</nu-link>
</nu-flex>`);
};

export const badges = () => {
  return $(`
<nu-heading level="4">Normal badges</nu-heading>
<nu-block>
  <nu-badge>Simple badge</nu-badge>
  <nu-badge special>Special badge</nu-badge>
</nu-block>

<nu-heading level="4">Themed badges</nu-heading>
<nu-block text="w5">
  <nu-badge theme="tint">Tint</nu-badge>
  <nu-badge theme="tone">Tone</nu-badge>
  <nu-badge theme="swap">Swap</nu-badge>
  <nu-badge theme="special">Special</nu-badge>
</nu-block>`);
};

export const marks = () => {
  return $(`
<nu-heading level="3">Marks</nu-heading>
<nu-block>
  Mark some
  <nu-mark>parts</nu-mark>
  of the text
  or emphasize attention to
  <nu-mark special>the important part</nu-mark>
  of the text.
  Use themes to make marks more
  <nu-mark theme="tone">pretty</nu-mark>
  or
  <nu-mark theme="swap" fill>visually strong</nu-mark>
  .
</nu-block>`);
};

export const typography = () => {
  return $(`
<nu-block size="h1">Text with heading level 1 size</nu-block>
<nu-block size="h2">Text with heading level 1 size</nu-block>
<nu-block size="h3">Text with heading level 1 size</nu-block>
<nu-block size="h4">Text with heading level 1 size</nu-block>
<nu-block size="h5">Text with heading level 1 size</nu-block>
<nu-block size="h6">Text with heading level 1 size</nu-block>
<nu-block>Typical paragraph text</nu-block>
<nu-block text="w1">Font weight 100</nu-block>
<nu-block text="w2">Font weight 200</nu-block>
<nu-block text="w3">Font weight 300</nu-block>
<nu-block text="w4">Font weight 400</nu-block>
<nu-block text="w5">Font weight 500</nu-block>
<nu-block text="w6">Font weight 600</nu-block>
<nu-block text="w7">Font weight 700</nu-block>
<nu-block text="w8">Font weight 800</nu-block>
<nu-block text="w9">Font weight 900</nu-block>
<nu-block text="i">Italic</nu-block>
<nu-block text="u">Underline</nu-block>
<nu-block text="s">Strikethrough</nu-block>
<nu-block text="uppercase">Upper-cased</nu-block>
<nu-block text="lowercase" size="xl">
  Vertical align:
  <nu-el text="baseline" size="xs">baseline</nu-el>
  <nu-el text="middle" size="xs">middle</nu-el>
  <nu-el text="super" size="xs">super</nu-el>
  <nu-el text="top" size="xs">top</nu-el>
  <nu-el text="text-top" size="xs">text-top</nu-el>
  <nu-el text="sub" size="xs">sub</nu-el>
  <nu-el text="bottom" size="xs">bottom</nu-el>
  <nu-el text="text-bottom" size="xs">text-bottom</nu-el>
  <nu-el text="v-middle" size="xs">v-bottom (custom modifier for inline-blocks)</nu-el>
</nu-block>
<nu-block text="left">Align text left</nu-block>
<nu-block text="right">Align text right</nu-block>
<nu-block text="center">Align text center</nu-block>
<nu-block text="justify">Justify text</nu-block>
<nu-block text="monospace">Monospaced font</nu-block>
<nu-block text="spacing">Letter spacing with base border width</nu-block>`);
};

export const progressBars = () => {
  return $(`
<nu-heading level="4">Progress bars</nu-heading>
<nu-flow width="max(18)" gap>
  <nu-progressbar value="0"></nu-progressbar>
  <nu-progressbar value="50" min="0"></nu-progressbar>
  <nu-progressbar value="100"></nu-progressbar>
</nu-flow>`);
};

export const tooltips = () => {
  return $(`
<nu-heading level="4">Tooltips</nu-heading>
<nu-block>
  You can add description to the element via tooltip.
</nu-block>
<nu-card>
  <nu-flex flow="column" items="center" gap>
    <nu-badge>
      Hover zone UP
      <nu-tooltip text="nowrap" place="outside-top">It's tooltip!</nu-tooltip>
    </nu-badge>
    
    <nu-badge>
      Hover zone RIGHT
      <nu-tooltip text="nowrap" place="outside-right">It's tooltip!</nu-tooltip>
    </nu-badge>
    
    <nu-badge>
      Hover zone DOWN
      <nu-tooltip text="nowrap" place="outside-bottom">It's tooltip!</nu-tooltip>
    </nu-badge>
    
    <nu-badge>
      Hover zone LEFT
      <nu-tooltip text="nowrap" place="outside-left">It's tooltip!</nu-tooltip>
    </nu-badge>
  </nu-flex>
</nu-card>

<nu-heading level="4">Parent overflow</nu-heading>
<nu-block>
  You can use <nu-mark>fixate mixin</nu-mark> for Tooltips so they can ignore <nu-mark>overflow: hidden</nu-mark> on parent elements.
</nu-block>
<nu-card overflow="no" gap padding="1x 2x">
  <nu-block>
    Card with <nu-mark>overflow: hidden</nu-mark>. 
  </nu-block>
  <nu-block>
    <nu-flex gap>
      <nu-badge>
        Fixate Mixin
        <nu-tooltip text="nowrap" drop="down">It's tooltip!</nu-tooltip>
      </nu-badge>
      <nu-badge>
        No Fixate Mixin
        <nu-tooltip text="nowrap" place="outside-bottom">It's tooltip!</nu-tooltip>
      </nu-badge>
    </nu-flex>  
  </nu-block>
</nu-card>

<nu-heading level="4">Parent overflow</nu-heading>
<nu-block>
  Tooltips of active elements are also shown on focus.
</nu-block>
<nu-card overflow="no" gap>
  <nu-block>
    <nu-btn padding>
      Button with tooltip
      <nu-tooltip place="outside-right" text="nowrap">Button tooltip</nu-tooltip>
    </nu-btn>
  </nu-block>
  <nu-block>
    <nu-input placeholder="Input with tooltip">
      <nu-tooltip place="outside-right" text="nowrap">Input tooltip</nu-tooltip>
    </nu-input>
  </nu-block>
</nu-card>

<nu-heading level="4">Advanced usage</nu-heading>
<nu-block>
  Use tooltips to make fancy placeholders.
</nu-block>
<nu-card>
  <nu-attrs
    for="fancy-tooltip"
    opacity="^ :tooltip:empty[1] :empty[.5] 1"
    border="^ :tooltip:empty[1b] :empty[0] 1b"
    size="^ :tooltip:empty[xs] :empty[md] xs"
    radius="1r 1r 0 0"
    move="^ :tooltip:empty[1r 0] :empty[1r 4.5x] 1r 0"
    transition="move, size, border, color"
    fill="^ :tooltip:empty[input] :empty[clear] input"
    color="^ :tooltip:empty[text] :empty[focus] text"
    shadow="0"
    text="nowrap"
    place="outside-top left"></nu-attrs>

  <nu-input placeholder="">
    <nu-tooltip as="fancy-tooltip">
      Your name
    </nu-tooltip>  
  </nu-input>
</nu-card>
`);
};

export const lines = () => {
  return $(`
<nu-heading level="4">Horizontal line</nu-heading>

<nu-flow>
  <nu-line></nu-line>
</nu-flow>

<nu-heading level="4">Vertical line</nu-heading>

<nu-flex height="5">
  <nu-line orient="v"></nu-line>
</nu-flex>`);
};

export const codeSnippets = () => {
  return $(`
<nu-heading>Code snippets</nu-heading>

<nu-block>To add HTML tags to <nu-mark>nu-code</nu-mark> please use <nu-mark>&lt;textarea&gt;</nu-mark> tag instead of <nu-mark>&lt;pre&gt;</nu-mark>.</nu-block>

<nu-heading level="4">Code block</nu-heading>

<nu-code>
  <pre>
    const str = 'String';
    const num = 123;
  </pre>
</nu-code>

<nu-heading level="4">Code block in Shadow DOM</nu-heading>

<nu-code shady>
  <pre>
    const str = 'String';
    const num = 123;
  </pre>
</nu-code>

<nu-heading level="4">Numerated code block</nu-heading>

<nu-code enumerate>
  <pre>
    const obj = {
      str: 'value',
      number: 123,
      method(val) {
        return val.match(/\![0-9]/);
      },
    };

    // comment
    function funcName() {
      obj.method('awesome!');
    }
  </pre>
</nu-code>

<nu-heading level="4">Simple marks</nu-heading>

<nu-code>
  <pre>
    const myVar = #[['Mark variable']]#;
  </pre>
</nu-code>

<nu-heading level="4">Important marks</nu-heading>

<nu-code>
  <pre>
    const myVar = ![['Mark variable']]!;
  </pre>
</nu-code>

<nu-heading level="4">Inline code</nu-heading>

<nu-block>
  Look at this awesome code snippet:
  <nu-code inline><pre>var a = 'value';</pre></nu-code>
  .
</nu-block>

<nu-heading level="4">Diff commit</nu-heading>

<nu-code>
  <pre>
    - import { badMemories } from 'memory';
    + import { goodMemories } from 'memory';
  </pre>
</nu-code>`);
};

export const markdownConverter = () => {
  return $(`
<nu-heading level="3">Markdown Converter</nu-heading>

<nu-markdown>
  <pre>
    #### My awesome markdown header

    And markdown **TEXT**. What do you _think_? \`var a = '123'\`. Also here is a [link](https://github.com/tenphi/nude).

    \`\`\`enumerate
    var a = '123';
    var b = /wow?/;
    \`\`\`
  </pre>
</nu-markdown>

<nu-markdown shady>
  <pre>
    #### Markdown in Shadow DOM

    And markdown **TEXT**. What do you _think_? \`var a = '123'\`. Also here is a [link](https://github.com/tenphi/nude).

    \`\`\`enumerate
    var a = '123';
    var b = /wow?/;
    \`\`\`
  </pre>
</nu-markdown>

<nu-heading level="4">Inline markdown</nu-heading>

<nu-block>
  It's a fragment of "<nu-md><pre>**inlined** markdown _content_</pre></nu-md>".
</nu-block>`);
};
