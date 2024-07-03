import {extendTheme} from '@chakra-ui/react';
import retailReactAppTheme from '@salesforce/retail-react-app/app/theme';

import breakpoints from '../theme/foundations/breakpoints';
import colors from '../theme/foundations/colors';
import styles from '../theme/foundations/styles';
import { fontSizes, fontWeights, lineHeights } from '../theme/foundations/typography';
import space from '../theme/foundations/space';

import Button from './components/base/button';
import Input from './components/base/input';
import Link from './components/base/link';
import Form from './components/base/form';
import Select from './components/base/select';
import Checkbox from './components/base/checkbox';
import Radio from './components/base/radio';
import FormError from './components/base/formError';
import Accordion from './components/base/accordion';

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.
export const overrides = {
    ...retailReactAppTheme,
    breakpoints,
    colors,
    space,
    styles,
    fontSizes,
    fontWeights,
    lineHeights,
    components: {
        ...retailReactAppTheme.components,
        Button,
        Input,
        Link,
        Form,
        Select,
        Checkbox,
        Radio,
        FormError,
        Accordion,
    }
};

export default extendTheme(overrides);
