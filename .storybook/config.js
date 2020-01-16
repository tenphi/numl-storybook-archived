import '../numl/numl.dev';
import Lockr from 'lockr';
import { setScheme } from '../utils'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure, addParameters } from '@storybook/html';
import getNudeTheme from '../theme';

setScheme(Lockr.get('numl:scheme') || 'auto');

setTimeout(() => {
  addParameters({
    options: {
      theme: getNudeTheme(),
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  });

  // automatically import all files ending in *.stories.js
  configure(require.context('../stories', true, /\.stories\.js$/), module);
}, 100);
