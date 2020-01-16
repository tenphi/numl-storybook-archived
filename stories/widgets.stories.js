import { wrapper, setScheme } from '../utils';

const $ = wrapper;

export default {
  title: 'Widgets',
};

export const tabs = () => {
  return $(`
<nu-flow gap>
  <nu-tablist value="third" gap="2x" border="inside bottom">
    <nu-tab controls="first">First</nu-tab>
    <nu-tab controls="second">Second</nu-tab>
    <nu-tab controls="third">Third</nu-tab>
  </nu-tablist>
  
  <nu-block>
    <nu-block id="first">First tab panel</nu-block>
    <nu-block id="second">Second tab panel</nu-block>
    <nu-block id="third">Third tab panel</nu-block>
  </nu-block>
</nu-flow>`);
};
