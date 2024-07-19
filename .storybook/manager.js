import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import vilebrequinTheme from './vilebrequinTheme'

addons.setConfig({
  theme: vilebrequinTheme,
});