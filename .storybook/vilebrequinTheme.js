import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Vilebrequin Styleguide',
  brandUrl: 'https://vilebrequin.com',
  brandImage: '/img/logo.png',

  colorPrimary: '#e3eaf4',
  colorSecondary: '#0c315d',

  appBg: '#FFFAF6',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#D9D9D9',
  appBorderRadius: 0,

  textColor: '#000000',
  textInverseColor: '#ffffff',

  barTextColor: '#D9D9D9',
  barSelectedColor: '#ffffff',
  barHoverColor: '#e3eaf4',
  barBg: '#0c315d',

  inputBg: '#ffffff',
  inputBorder: '#D9D9D9',
  inputBorderRadius: 2
});