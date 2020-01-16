import { wrapper } from '../utils';

const $ = wrapper;

export default {
  title: 'Basics',
};

export const heading = () => {
  return $(`
<nu-heading size="h1|h2|h3|h4">
  Hello World
</nu-heading>`);
};

export const button = () => {

  return $(`
<nu-btn>
  Simple button
</nu-btn>`);
};

export const specialButton = () => {
  return $(`
<nu-btn special>
  Simple button
</nu-btn>`);
};
