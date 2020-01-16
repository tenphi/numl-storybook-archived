import { create } from '@storybook/theming/create';

const cssVar = (property, defaultValue) =>
  getComputedStyle(document.body).getPropertyValue(property).trim() || defaultValue;


export default () => create({
  base: 'light',

  colorPrimary: cssVar('--nu-special-color'),
  colorSecondary: cssVar('--nu-special-color'),

  // UI
  appBg: cssVar('--nu-subtle-color'),
  appContentBg: cssVar('--nu-bg-color'),
  appBorderColor: cssVar('--nu-border-color'),
  appBorderRadius: cssVar('--nu-border-radius'),

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: cssVar('--nu-text-color'),
  textInverseColor: cssVar('--nu-bg-color'),

  // Toolbar default and active colors
  barTextColor: cssVar('--nu-text-color'),
  barSelectedColor: cssVar('--nu-special-color'),
  barBg: cssVar('--nu-bg-color'),

  // Form colors
  inputBg: cssVar('--nu-input-color'),
  inputBorder: cssVar('--nu-border-color'),
  inputTextColor: cssVar('--nu-text-color'),
  inputBorderRadius: cssVar('--nu-border-radius'),

  brandTitle: 'NuML Storybook',
  brandUrl: 'https://github.com/tenphi/nude',
  brandImage: 'https://raw.githubusercontent.com/tenphi/nude/master/images/nude-logo-128.png',
});
