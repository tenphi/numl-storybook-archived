import { wrapper } from '../utils';

const $ = wrapper;

export default {
  title: 'States',
};

export const labels = () => {
  return $(`
<nu-heading level="4">Label based on state</nu-heading>

<nu-block>
  Framework automatically generates CSS based on states without style overlapping.
</nu-block>

<nu-btn
  width="16"
  role="checkbox"
  t="'DEFAULT' :pressed['PRESSED'] :hover['HOVERED'] :hover:pressed['PRESSED & HOVERED']">
</nu-btn>`);
};

export const parentState = () => {
  return $(`
<nu-heading level="4">Styling based on parent state</nu-heading>

<nu-btn
  width="10"
  role="checkbox"
  text="left :pressed[right]"
  display="flex" flow="row :pressed[row-reverse]">
  <nu-icon name="^ align-left :pressed[align-right]"></nu-icon>
  <nu-el grow="1" t="'Align left' ^:pressed['Align right']"></nu-el>
</nu-btn>`);
};

export const contextState = () => {
  return $(`
<nu-heading level="4">Styling based on state of element in context</nu-heading>

<nu-btn
  id="tile"
  width="12"
  flow="row"
  role="checkbox"
  content="stretch">
  <nu-pane>
    <nu-heading level="6">Total sales</nu-heading>
    <nu-icon
      name="chevron-down"
      scale="^#tile :pressed[flip-y]"
      size="2.5x"></nu-icon>
  </nu-pane>
  <nu-line></nu-line>
  <nu-block text="w7 h4">
    $92,439
  </nu-block>
  <nu-popup>
    Additional information
  </nu-popup>
</nu-btn>`);
};
