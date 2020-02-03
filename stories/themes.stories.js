import { wrapper } from '../utils';

const $ = wrapper;

export default {
  title: 'Themes',
};

export const Types = () => {
  return $(`
<nu-flex flow="row wrap" gap="2x" content="space-around">
  <nu-card gap="1x">
    <nu-heading level="3" size="h5" inline>Blue - Main theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="tint">
    <nu-heading level="3" size="h5" inline>Blue - Tint theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="tone">
    <nu-heading level="3" size="h5" inline>Blue - Tone theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="swap">
    <nu-heading level="3" size="h5" inline>Blue - Swap theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
  <nu-card gap="1x" theme="special">
    <nu-heading level="3" size="h5" inline>Blue - Special theme</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-card fill="subtle" border="0">Subtle card with
      <nu-mark>mark</nu-mark>
    </nu-card>
    <nu-block>
      <nu-input value="Input data"></nu-input>
    </nu-block>
    <nu-block>
      <nu-special>Special text.</nu-special>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
  </nu-card>
</nu-flex>`);
};

export const Variants = () => {
  return $(`
<nu-heading level="4">Tint variations</nu-heading>

<nu-flex flow="row wrap" gap="2x">
  <nu-card gap="1x" theme="tint strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tint strong</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="tint">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tint</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="tint soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tint soft</nu-tooltip>
  </nu-card>
</nu-flex>

<nu-heading level="4">Tone variations</nu-heading>

<nu-flex flow="row wrap" gap="2x">
  <nu-card gap="1x" theme="tone bold strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone bold strong</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="tone strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone strong</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="tone dim strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone dim strong</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="tone bold">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>

    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone bold</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="tone">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="tone dim">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone dim</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="tone bold soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone bold soft</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="tone soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone soft</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="tone dim soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">tone dim soft</nu-tooltip>
  </nu-card>

</nu-flex>

<nu-heading level="4">Swap variations</nu-heading>

<nu-flex flow="row wrap" gap="2x">
  <nu-card gap="1x" theme="swap bold strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap bold strong</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="swap strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap strong</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="swap dim strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap dim strong</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="swap bold">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap bold</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="swap">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="swap dim">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap dim</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="swap bold soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap bold strong</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="swap soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>

    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap soft</nu-tooltip>
  </nu-card>
  <nu-card gap="1x" theme="swap dim soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">swap dim soft</nu-tooltip>
  </nu-card>
</nu-flex>

<nu-heading level="4">Special variations</nu-heading>

<nu-flex flow="row wrap" gap="2x">
  <nu-card gap="1x" theme="special strong">
    <nu-heading level="3" size="h5" inline>High contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">special strong</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="special">
    <nu-heading level="3" size="h5" inline>Normal contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">special</nu-tooltip>
  </nu-card>

  <nu-card gap="1x" theme="special soft">
    <nu-heading level="3" size="h5" inline>Low contrast</nu-heading>
    <nu-block>Text and
      <nu-mark>mark</nu-mark>
    </nu-block>
    <nu-btn>Simple Button</nu-btn>
    <nu-btn special>Special Button</nu-btn>
    <nu-tooltip text="monospace nowrap">special soft</nu-tooltip>
  </nu-card>
</nu-flex>`);
};
